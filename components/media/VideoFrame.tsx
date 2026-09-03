"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoFrameProps {
  /**
   * A Vimeo or YouTube watch URL, or a path to an MP4 in `public/`. Leave it
   * unset while the final cut is still with the editor and the frame falls
   * back to `poster`, which carries the aspect ratio the file needs to be
   * delivered at.
   */
  src?: string;
  /** Still shown before playback, and on its own when `src` is unset. */
  poster: string;
  title: string;
  /** Tailwind aspect ratio utility. Defaults to widescreen. */
  aspect?: string;
  className?: string;
}

/** Turns a Vimeo share link into its player URL, preserving the hash param. */
function toEmbedUrl(url: string): string | null {
  const vimeo = url.match(/vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/);
  if (vimeo) {
    const query = vimeo[2] ? `?h=${vimeo[2]}&autoplay=1` : "?autoplay=1";
    return `https://player.vimeo.com/video/${vimeo[1]}${query}`;
  }

  const youtube = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
  );
  if (youtube) {
    return `https://www.youtube.com/embed/${youtube[1]}?autoplay=1&rel=0`;
  }

  return null;
}

/**
 * One video, framed.
 *
 * Handles the three states a showreel goes through on this site: an embed from
 * Vimeo, a self hosted MP4, and the interim state where the film has not been
 * delivered yet and the frame shows the placeholder that tells the editor what
 * size to cut it at.
 */
export default function VideoFrame({
  src,
  poster,
  title,
  aspect = "aspect-video",
  className = "",
}: VideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = src ? toEmbedUrl(src) : null;
  const isSelfHosted = Boolean(src && !embedUrl);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden bg-black ${className}`}
    >
      {/* Brand frame. Sits above the media on the placeholder state only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 border border-white/10"
      >
        <div className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-cyan sm:h-16 sm:w-16" />
        <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-cyan sm:h-16 sm:w-16" />
        <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-cyan sm:h-16 sm:w-16" />
        <div className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-cyan sm:h-16 sm:w-16" />
      </div>

      {embedUrl && isPlaying ? (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : isSelfHosted ? (
        <video
          controls
          preload="metadata"
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <Image
            src={poster}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {embedUrl && (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play ${title}`}
              className="group absolute inset-0 z-10 flex items-center justify-center bg-black/25 transition-colors duration-300 hover:bg-black/45"
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-16 w-16 items-center justify-center bg-purple shadow-2xl transition-colors duration-300 group-hover:bg-cyan sm:h-24 sm:w-24"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 scale-150 bg-purple/30 blur-2xl"
                />
                <Play className="relative ml-1 h-7 w-7 fill-white text-white sm:h-10 sm:w-10" />
              </motion.span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
