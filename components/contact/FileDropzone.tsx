"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FileArchive,
  FileImage,
  FileSpreadsheet,
  FileText,
  FileType2,
  PencilRuler,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";

interface FileDropzoneProps {
  files: File[];
  onChange: (files: File[]) => void;
  /** Surfaced to the parent so one error region serves the whole form. */
  onError?: (message: string | null) => void;
  maxFiles?: number;
  /** Per file limit, in bytes. */
  maxFileSize?: number;
  /** Combined limit across every attachment, in bytes. */
  maxTotalSize?: number;
  accept?: string;
  label?: string;
  hint?: string;
  id?: string;
}

const DEFAULT_ACCEPT =
  ".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.gif,.webp,.heic,.ai,.eps,.psd,.svg,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.key,.zip,.rar,.txt";

/** Human readable file size, rounded the way people expect to read it. */
function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function extensionOf(name: string): string {
  const dot = name.lastIndexOf(".");
  return dot === -1 ? "" : name.slice(dot + 1).toLowerCase();
}

/** Picks an icon and a tint per family of file, so a long list stays scannable. */
function describe(file: File): {
  Icon: React.ComponentType<{ className?: string }>;
  tint: string;
  kind: string;
} {
  const ext = extensionOf(file.name);

  if (["jpg", "jpeg", "png", "gif", "webp", "heic", "svg"].includes(ext)) {
    return { Icon: FileImage, tint: "text-cyan", kind: "Image" };
  }
  if (["dwg", "dxf", "ai", "eps", "psd"].includes(ext)) {
    return { Icon: PencilRuler, tint: "text-purple", kind: "Design file" };
  }
  if (ext === "pdf") {
    return { Icon: FileType2, tint: "text-red-600", kind: "PDF" };
  }
  if (["xls", "xlsx", "csv"].includes(ext)) {
    return { Icon: FileSpreadsheet, tint: "text-green-700", kind: "Spreadsheet" };
  }
  if (["zip", "rar", "7z"].includes(ext)) {
    return { Icon: FileArchive, tint: "text-amber-600", kind: "Archive" };
  }
  return { Icon: FileText, tint: "text-charcoal", kind: "Document" };
}

/**
 * Multi file drop area for the proposal builder.
 *
 * Accepts a drag and drop, a click to browse, and a paste, then holds the
 * selection as a visible list the client can prune before they submit. Image
 * attachments get a thumbnail because the most common upload here is a
 * reference photo or a rendering, and a filename alone is not enough to tell
 * two renderings apart.
 *
 * The parent owns the file list so the form can send it with the rest of the
 * payload. Validation errors are reported upward rather than rendered here,
 * which keeps a single error region on the form.
 */
export default function FileDropzone({
  files,
  onChange,
  onError,
  maxFiles = 10,
  maxFileSize = 20 * 1024 * 1024,
  maxTotalSize = 60 * 1024 * 1024,
  accept = DEFAULT_ACCEPT,
  label = "Drag your files here",
  hint = "Floor plans, CAD drawings, renderings, brand guidelines, mood boards, run of show documents",
  id = "file-dropzone",
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  /** Nested dragenter and dragleave events fire constantly, so count depth. */
  const dragDepth = useRef(0);

  const totalSize = useMemo(
    () => files.reduce((sum, file) => sum + file.size, 0),
    [files]
  );

  /**
   * Object URLs for image previews. Regenerated whenever the list changes and
   * revoked on the way out so a long session does not leak blobs.
   */
  const previews = useMemo(() => {
    const map = new Map<string, string>();
    if (typeof URL === "undefined" || !URL.createObjectURL) return map;

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        map.set(`${file.name}-${file.size}`, URL.createObjectURL(file));
      }
    });
    return map;
  }, [files]);

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  const addFiles = useCallback(
    (incoming: File[]) => {
      if (incoming.length === 0) return;

      const problems: string[] = [];
      const accepted: File[] = [];
      let running = totalSize;

      const seen = new Set(files.map((file) => `${file.name}:${file.size}`));

      for (const file of incoming) {
        const key = `${file.name}:${file.size}`;

        if (seen.has(key)) {
          problems.push(`${file.name} was already attached`);
          continue;
        }
        if (file.size === 0) {
          problems.push(`${file.name} is empty`);
          continue;
        }
        if (file.size > maxFileSize) {
          problems.push(
            `${file.name} is larger than ${formatSize(maxFileSize)}`
          );
          continue;
        }
        if (files.length + accepted.length >= maxFiles) {
          problems.push(`Only ${maxFiles} files can be attached`);
          break;
        }
        if (running + file.size > maxTotalSize) {
          problems.push(
            `Adding ${file.name} would pass the ${formatSize(
              maxTotalSize
            )} total limit`
          );
          continue;
        }

        seen.add(key);
        running += file.size;
        accepted.push(file);
      }

      if (accepted.length > 0) onChange([...files, ...accepted]);
      onError?.(problems.length > 0 ? problems.join(". ") + "." : null);
    },
    [files, onChange, onError, maxFiles, maxFileSize, maxTotalSize, totalSize]
  );

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragDepth.current = 0;
    setIsDragging(false);
    addFiles(Array.from(event.dataTransfer.files || []));
  };

  const removeAt = (index: number) => {
    onChange(files.filter((_, position) => position !== index));
    onError?.(null);
  };

  const openPicker = () => inputRef.current?.click();

  const nearLimit = files.length >= maxFiles;

  return (
    <div>
      {/* Drop area. The label element keeps the click target and the input
          associated for assistive tech; the div handles the drag events. */}
      <div
        onDragEnter={(event) => {
          event.preventDefault();
          dragDepth.current += 1;
          setIsDragging(true);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          event.preventDefault();
          dragDepth.current -= 1;
          if (dragDepth.current <= 0) {
            dragDepth.current = 0;
            setIsDragging(false);
          }
        }}
        onDrop={handleDrop}
        onPaste={(event) => {
          const pasted = Array.from(event.clipboardData?.files || []);
          if (pasted.length > 0) addFiles(pasted);
        }}
        className={`relative overflow-hidden border-2 border-dashed transition-colors duration-200 ${
          isDragging
            ? "border-cyan bg-cyan/10"
            : nearLimit
              ? "border-gray-200 bg-gray-50"
              : "border-gray-300 bg-gray-50/60 hover:border-purple hover:bg-purple/5"
        }`}
      >
        {/* Decorative corner brackets, matching the site furniture. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-purple/30"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-purple/30"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-purple/30"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-purple/30"
        />

        <label
          htmlFor={id}
          className={`flex flex-col items-center justify-center px-6 py-12 text-center ${
            nearLimit ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <span
            className={`mb-4 flex h-14 w-14 items-center justify-center transition-colors duration-200 ${
              isDragging ? "bg-cyan" : "bg-purple"
            }`}
          >
            <UploadCloud className="h-7 w-7 text-white" />
          </span>

          <span className="text-sm font-bold uppercase tracking-wide text-black sm:text-base">
            {isDragging ? "Drop to attach" : label}
          </span>

          <span className="mt-2 text-xs text-gray-600 sm:text-sm">
            or{" "}
            <span className="font-semibold text-purple underline decoration-purple/40 underline-offset-4">
              browse your device
            </span>
          </span>

          <span className="mt-4 max-w-md text-xs leading-relaxed text-gray-500">
            {hint}
          </span>

          <span className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-wider text-gray-400">
            <span>PDF</span>
            <span>DWG</span>
            <span>DXF</span>
            <span>AI</span>
            <span>EPS</span>
            <span>PSD</span>
            <span>JPG</span>
            <span>PNG</span>
            <span>DOC</span>
            <span>XLS</span>
            <span>PPT</span>
            <span>ZIP</span>
          </span>

          <input
            id={id}
            ref={inputRef}
            type="file"
            multiple
            accept={accept}
            disabled={nearLimit}
            onChange={(event) => {
              addFiles(Array.from(event.target.files || []));
              // Reset so re-picking the same file fires change again.
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="sr-only"
          />
        </label>
      </div>

      {/* Counters */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
        <p>
          <span className="font-semibold text-black">{files.length}</span> of{" "}
          {maxFiles} files
          {files.length > 0 && (
            <>
              {" "}
              <span aria-hidden="true">·</span>{" "}
              <span className="font-semibold text-black">
                {formatSize(totalSize)}
              </span>{" "}
              of {formatSize(maxTotalSize)}
            </>
          )}
        </p>

        {files.length > 0 && (
          <button
            type="button"
            onClick={() => {
              onChange([]);
              onError?.(null);
            }}
            className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-gray-500 transition-colors hover:text-red-600"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remove all
          </button>
        )}
      </div>

      {/* Progress bar against the total size budget */}
      {files.length > 0 && (
        <div
          className="mt-2 h-1 w-full overflow-hidden bg-gray-200"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.min(
            100,
            Math.round((totalSize / maxTotalSize) * 100)
          )}
          aria-label="Attachment size used"
        >
          <div
            className="h-full bg-linear-to-r from-purple to-cyan transition-all duration-300"
            style={{
              width: `${Math.min(100, (totalSize / maxTotalSize) * 100)}%`,
            }}
          />
        </div>
      )}

      {/* Attached files */}
      {files.length > 0 && (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {files.map((file, index) => {
            const { Icon, tint, kind } = describe(file);
            const preview = previews.get(`${file.name}-${file.size}`);

            return (
              <li
                key={`${file.name}-${file.size}-${index}`}
                className="group flex items-center gap-3 border border-gray-200 bg-white p-3 transition-colors duration-200 hover:border-purple/50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-gray-100">
                  {preview ? (
                    // Blob URL from the visitor's own machine, so next/image
                    // cannot optimise it and a plain img is correct here.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={preview}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Icon className={`h-6 w-6 ${tint}`} />
                  )}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-black">
                    {file.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-gray-500">
                    {kind} <span aria-hidden="true">·</span>{" "}
                    {formatSize(file.size)}
                  </span>
                </span>

                <button
                  type="button"
                  onClick={() => removeAt(index)}
                  aria-label={`Remove ${file.name}`}
                  className="shrink-0 p-1.5 text-gray-400 transition-colors hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {files.length === 0 && (
        <button
          type="button"
          onClick={openPicker}
          className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple transition-colors hover:text-cyan sm:hidden"
        >
          Choose files
        </button>
      )}
    </div>
  );
}
