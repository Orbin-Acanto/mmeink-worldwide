"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Volume2,
  Lightbulb,
  Monitor,
  Radio,
  Headphones,
  Wrench,
  Coffee,
  UtensilsCrossed,
  Wine,
  Sandwich,
  Salad,
  ChefHat,
  IceCreamCone,
  GlassWater,
  CheckCircle2,
  X,
  ArrowLeft,
  Upload,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "@/components/Button";

// ── Shared sub-components ──────────────────────────────────────────

function StepIndicator({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center">
        {steps.map((label, idx) => (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              {idx > 0 ? (
                <div className="h-px flex-1">
                  <div
                    className={`h-full transition-colors duration-300 ${
                      idx <= current ? "bg-purple" : "bg-gray-200"
                    }`}
                  />
                </div>
              ) : (
                <div className="flex-1" />
              )}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center text-sm font-bold transition-all duration-300 ${
                  idx <= current
                    ? "bg-purple text-white shadow-lg"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {idx < current ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              {idx < steps.length - 1 ? (
                <div className="h-px flex-1">
                  <div
                    className={`h-full transition-colors duration-300 ${
                      idx < current ? "bg-purple" : "bg-gray-200"
                    }`}
                  />
                </div>
              ) : (
                <div className="flex-1" />
              )}
            </div>
            <span
              className={`mt-2 hidden text-center text-[10px] tracking-widest uppercase sm:block ${
                idx <= current ? "font-semibold text-purple" : "text-gray-400"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs font-semibold tracking-[0.15em] text-purple uppercase sm:hidden">
        Step {current + 1} of {steps.length}: {steps[current]}
      </p>
    </div>
  );
}

function FieldCard({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="group border border-gray-200 bg-white px-4 py-4 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-2 text-[10px] tracking-[0.15em] text-gray-400 uppercase"
      >
        {label}
        {required && <span className="text-purple">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full border-b border-gray-200 bg-transparent px-0 py-1 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-purple focus:outline-none"
      />
    </div>
  );
}

function CounterCard({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="group flex flex-col items-center border border-gray-200 bg-white px-4 py-6 text-center transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
      <label
        htmlFor={name}
        className="mb-3 text-[10px] tracking-[0.15em] text-gray-400 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        type="number"
        name={name}
        min="0"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder="0"
        className="w-full border-b border-gray-200 bg-transparent py-1 text-center text-2xl font-light text-gray-900 placeholder-gray-300 transition-colors focus:border-purple focus:outline-none"
      />
    </div>
  );
}

function CheckboxGroup({
  title,
  items,
  selected,
  onToggle,
}: {
  title?: string;
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
}) {
  return (
    <div>
      {title && (
        <h4 className="mb-3 text-sm font-semibold text-black">{title}</h4>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <label
            key={item}
            className="group flex cursor-pointer items-center gap-3 px-3 py-2 transition-colors duration-150 hover:bg-gray-50"
          >
            <div
              className={`flex h-4 w-4 shrink-0 items-center justify-center border-2 transition-all duration-200 ${
                selected.includes(item)
                  ? "border-purple bg-purple"
                  : "border-gray-400 group-hover:border-gray-600"
              }`}
            >
              {selected.includes(item) && (
                <svg
                  className="h-2.5 w-2.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-xs text-gray-700">{item}</span>
            <input
              type="checkbox"
              className="hidden"
              checked={selected.includes(item)}
              onChange={() => onToggle(item)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function RadioGroup({
  items,
  selected,
  onSelect,
}: {
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <label
          key={item}
          className="group flex cursor-pointer items-center gap-3 px-3 py-2 transition-colors duration-150 hover:bg-gray-50"
        >
          <div
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
              selected === item
                ? "border-purple"
                : "border-gray-400 group-hover:border-gray-600"
            }`}
          >
            {selected === item && (
              <div className="h-2 w-2 rounded-full bg-purple" />
            )}
          </div>
          <span className="text-xs text-gray-700">{item}</span>
          <input
            type="radio"
            className="hidden"
            checked={selected === item}
            onChange={() => onSelect(item)}
          />
        </label>
      ))}
    </div>
  );
}

function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`border bg-white transition-all duration-300 ${
        isOpen ? "border-purple/30 shadow-sm" : "border-gray-200"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50/50 md:px-8"
      >
        <span className="text-base font-bold tracking-wide text-black uppercase">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-purple" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 px-6 py-8 md:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Icon service items ─────────────────────────────────────────────

const AV_SERVICES = [
  { label: "Audio", icon: Volume2 },
  { label: "Lighting", icon: Lightbulb },
  { label: "Staging", icon: Monitor },
  { label: "Video / LED Walls", icon: Radio },
  { label: "Live Streaming Services", icon: Headphones },
  { label: "Technical Production Support", icon: Wrench },
];

const FOOD_BEVERAGE = [
  { label: "Breakfast", icon: Coffee },
  { label: "Lunch", icon: Sandwich },
  { label: "AM / PM Snacks", icon: IceCreamCone },
  { label: "Cocktail Reception", icon: Wine },
  { label: "Sit-Down Dinner", icon: UtensilsCrossed },
  { label: "Food Stations", icon: Salad },
  { label: "Bar Service", icon: GlassWater },
  { label: "Custom Menu Design", icon: ChefHat },
];

const STEP_LABELS = [
  "Services",
  "Event Info",
  "Venue & Catering",
  "Production",
  "Finalize",
];

const MAX_FILE_SIZE = 20 * 1024 * 1024;
const MAX_FILES = 10;

export default function EventRFPForm() {
  const [step, setStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formStartTimeRef = useRef<number | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Honeypot
  const [website, setWebsite] = useState("");

  // Step 1
  const [selectedAV, setSelectedAV] = useState<string[]>([]);
  const [selectedFB, setSelectedFB] = useState<string[]>([]);

  // Step 2
  const [fields, setFields] = useState<Record<string, string>>({});
  const [eventType, setEventType] = useState("");
  const [attendance, setAttendance] = useState<Record<string, string>>({});

  // Step 3
  const [venueRequirements, setVenueRequirements] = useState<string[]>([]);
  const [roomSetup, setRoomSetup] = useState("");
  const [foodDetailed, setFoodDetailed] = useState<Record<string, string[]>>({
    breakfast: [],
    lunch: [],
    dinner: [],
    reception: [],
    beverage: [],
  });
  const [culinary, setCulinary] = useState<string[]>([]);

  // Step 4
  const [avProduction, setAvProduction] = useState<Record<string, string[]>>({
    audio: [],
    video: [],
    lighting: [],
    streaming: [],
    staging: [],
  });
  const [decor, setDecor] = useState<string[]>([]);
  const [entertainment, setEntertainment] = useState<string[]>([]);
  const [branding, setBranding] = useState<string[]>([]);

  // Step 5
  const [staffing, setStaffing] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);

  useEffect(() => {
    formStartTimeRef.current = Date.now();
  }, []);

  const updateField = (name: string, value: string) =>
    setFields((p) => ({ ...p, [name]: value }));
  const updateAttendance = (name: string, value: string) =>
    setAttendance((p) => ({ ...p, [name]: value }));

  const toggleList = (
    item: string,
    list: string[],
    setter: (v: string[]) => void,
  ) => {
    setter(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item],
    );
  };

  const toggleNestedList = (
    key: string,
    item: string,
    state: Record<string, string[]>,
    setter: (v: Record<string, string[]>) => void,
  ) => {
    const current = state[key] || [];
    setter({
      ...state,
      [key]: current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item],
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const incoming = Array.from(files);
    const valid = incoming.filter((f) => f.size <= MAX_FILE_SIZE);

    if (valid.length !== incoming.length) {
      setError("Each file must be 20MB or smaller. Larger files were skipped.");
    }

    setAttachments((prev) => {
      const combined = [...prev, ...valid];
      if (combined.length > MAX_FILES) {
        setError(`You can attach up to ${MAX_FILES} files.`);
        return combined.slice(0, MAX_FILES);
      }
      return combined;
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) =>
    setAttachments((prev) => prev.filter((_, i) => i !== index));

  const nextStep = () => {
    setError(null);
    setStep((s) => Math.min(s + 1, STEP_LABELS.length - 1));
    setOpenAccordion(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
    setOpenAccordion(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setStep(0);
    setOpenAccordion(null);
    setSelectedAV([]);
    setSelectedFB([]);
    setFields({});
    setEventType("");
    setAttendance({});
    setVenueRequirements([]);
    setRoomSetup("");
    setFoodDetailed({
      breakfast: [],
      lunch: [],
      dinner: [],
      reception: [],
      beverage: [],
    });
    setCulinary([]);
    setAvProduction({
      audio: [],
      video: [],
      lighting: [],
      streaming: [],
      staging: [],
    });
    setDecor([]);
    setEntertainment([]);
    setBranding([]);
    setStaffing([]);
    setAttachments([]);
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);
    formStartTimeRef.current = Date.now();
  };

  const handleSubmit = async () => {
    setError(null);

    if (!fields.contactName || !fields.emailAddress) {
      setError(
        "Contact Name and Email Address are required. Please return to Event Info.",
      );
      return;
    }

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      const rfp = {
        services: { av: selectedAV, foodBeverage: selectedFB },
        eventInfo: {
          eventName: fields.eventName,
          company: fields.companyOrganization,
          contactName: fields.contactName,
          email: fields.emailAddress,
          phone: fields.phoneNumber,
          preferredVenue: fields.preferredVenue,
          eventDates: fields.eventDates,
          alternateDates: fields.alternateDates,
          startEndTime: fields.eventStartEndTime,
          loadInDateTime: fields.loadInDateTime,
          vendorLoadIn: fields.vendorLoadIn,
          loadOutDateTime: fields.loadOutDateTime,
        },
        eventType,
        attendance,
        venueRequirements,
        roomSetup,
        foodAndBeverage: foodDetailed,
        culinaryPreferences: culinary,
        avProduction,
        decor,
        entertainment,
        branding,
        logistics: {
          vendors: fields.numVendors,
          truckDeliveries: fields.truckDeliveries,
          freightRequirements: fields.freightRequirements,
          securityRequirements: fields.securityRequirements,
          insuranceCOIs: fields.insuranceCOIs,
          specialPermits: fields.specialPermits,
          electricalRequirements: fields.electricalRequirements,
          storageNeeds: fields.storageNeeds,
          overnightSecurity: fields.overnightSecurity,
        },
        staffing,
        budget: {
          estimated: fields.estimatedBudget,
          perGuest: fields.spendPerGuest,
          pricingTier: fields.pricingTier,
          flexibility: fields.budgetFlexibility,
        },
        additional: {
          eventGoals: fields.eventGoals,
          brandGuidelines: fields.brandGuidelines,
          specialRequests: fields.specialRequests,
        },
      };

      const body = new FormData();
      body.set("formType", "rfp");
      body.set("fullName", fields.contactName);
      body.set("email", fields.emailAddress);
      body.set("phone", fields.phoneNumber || "");
      body.set("company", fields.companyOrganization || "");
      body.set("eventType", eventType);
      body.set("page", "/contact#rfp");
      body.set("website", website);
      body.set("recaptchaToken", recaptchaToken);
      body.set("rfp", JSON.stringify(rfp));

      if (formStartTimeRef.current) {
        body.set("formStartedAt", String(formStartTimeRef.current));
      }

      attachments.forEach((file) => body.append("attachments", file));

      const response = await fetch("/api/contact-form", {
        method: "POST",
        body,
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(true);
        resetForm();
      } else {
        setError(
          result.message || "Failed to submit your RFP. Please try again.",
        );
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      }
    } catch (err) {
      console.error("RFP submission error:", err);
      setError("Failed to submit your RFP. Please try again.");
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="rfp"
        className="scroll-mt-32  px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="section-label text-center">Plan Every Detail</p>
          <h2 className="section-heading text-center">
            Build Your <span className="text-purple">Event Proposal</span>
          </h2>
          <p className="section-body-center mb-16">
            Design your event in just a few minutes. Our Request for Proposal
            (RFP) builder lets you specify every aspect of your event. Once
            submitted, our team will review your selections and prepare a
            customized proposal, budget, floor plan, and event timeline.
          </p>

          <StepIndicator steps={STEP_LABELS} current={step} />

          {error && (
            <div
              role="alert"
              className="mx-auto mb-8 max-w-6xl border-l-4 border-red-500 bg-red-50 p-4 text-red-800"
            >
              <p className="font-semibold">{error}</p>
            </div>
          )}

          <div className="mx-auto max-w-6xl">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
              style={{ display: "none" }}
            />

            {/* ── Step 1: Services ─────────────────────────── */}
            {step === 0 && (
              <div>
                <h3 className="mb-2 text-center text-2xl font-bold tracking-wide text-black uppercase">
                  Style of Services
                </h3>
                <p className="section-body-center mb-12">
                  Select the services you would like included in your event
                  proposal.
                </p>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                  {[
                    {
                      heading: "AV Services",
                      Icon: Volume2,
                      items: AV_SERVICES,
                      selected: selectedAV,
                      setter: setSelectedAV,
                    },
                    {
                      heading: "Food & Beverage",
                      Icon: UtensilsCrossed,
                      items: FOOD_BEVERAGE,
                      selected: selectedFB,
                      setter: setSelectedFB,
                    },
                  ].map(({ heading, Icon, items, selected, setter }) => (
                    <div key={heading}>
                      <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center bg-purple">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold tracking-wide text-black uppercase">
                            {heading}
                          </h4>
                          <p className="text-xs text-gray-400">
                            Select all that apply
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {items.map(({ label, icon: ItemIcon }) => {
                          const sel = selected.includes(label);
                          return (
                            <label
                              key={label}
                              className="group flex cursor-pointer items-center gap-4 px-5 py-4 transition-all duration-200 hover:bg-gray-50"
                            >
                              <div
                                className={`flex h-9 w-9 shrink-0 items-center justify-center transition-all duration-200 ${
                                  sel
                                    ? "bg-purple text-white"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                              >
                                <ItemIcon className="h-4 w-4" />
                              </div>
                              <span
                                className={`text-sm ${
                                  sel
                                    ? "font-medium text-black"
                                    : "text-gray-700"
                                }`}
                              >
                                {label}
                              </span>
                              <div className="ml-auto">
                                <div
                                  className={`flex h-5 w-5 items-center justify-center border-2 transition-all duration-200 ${
                                    sel
                                      ? "border-purple bg-purple"
                                      : "border-gray-300"
                                  }`}
                                >
                                  {sel && (
                                    <svg
                                      className="h-3 w-3 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={3}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              <input
                                type="checkbox"
                                className="hidden"
                                checked={sel}
                                onChange={() =>
                                  toggleList(label, selected, setter)
                                }
                              />
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Step 2: Event Info ───────────────────────── */}
            {step === 1 && (
              <div className="space-y-14">
                <div>
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Contact Details
                  </h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <FieldCard
                      label="Event Name"
                      name="eventName"
                      value={fields.eventName || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Company / Organization"
                      name="companyOrganization"
                      value={fields.companyOrganization || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Contact Name"
                      name="contactName"
                      value={fields.contactName || ""}
                      onChange={updateField}
                      required
                    />
                    <FieldCard
                      label="Email Address"
                      name="emailAddress"
                      type="email"
                      value={fields.emailAddress || ""}
                      onChange={updateField}
                      required
                    />
                    <FieldCard
                      label="Phone Number"
                      name="phoneNumber"
                      type="tel"
                      value={fields.phoneNumber || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Preferred Venue"
                      name="preferredVenue"
                      value={fields.preferredVenue || ""}
                      onChange={updateField}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-12">
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Event Schedule
                  </h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <FieldCard
                      label="Event Date(s)"
                      name="eventDates"
                      value={fields.eventDates || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Alternate Date(s)"
                      name="alternateDates"
                      value={fields.alternateDates || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Start & End Time"
                      name="eventStartEndTime"
                      value={fields.eventStartEndTime || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Load-In Date & Time"
                      name="loadInDateTime"
                      value={fields.loadInDateTime || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Vendor Load-In"
                      name="vendorLoadIn"
                      value={fields.vendorLoadIn || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Load-Out Date & Time"
                      name="loadOutDateTime"
                      value={fields.loadOutDateTime || ""}
                      onChange={updateField}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-12">
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Event Type
                  </h4>
                  <RadioGroup
                    items={[
                      "Brand Activation",
                      "Product Launch",
                      "Exhibition",
                      "Conference",
                      "Corporate Meeting",
                      "Town Hall",
                      "Award Dinner",
                      "Gala",
                      "Corporate Event",
                      "Themed Event",
                      "Seasonal / Holiday Party",
                      "Virtual / Hybrid Event",
                      "Fundraiser",
                      "Networking Reception",
                      "Cocktail Reception",
                      "Fashion Show",
                      "Press Conference",
                      "Private Celebration",
                      "Pop-Up Experience",
                      "Other",
                    ]}
                    selected={eventType}
                    onSelect={setEventType}
                  />
                </div>

                <div className="border-t border-gray-200 pt-12">
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Estimated Attendance
                  </h4>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    <CounterCard
                      label="Guests"
                      name="guestCount"
                      value={attendance.guestCount || ""}
                      onChange={updateAttendance}
                    />
                    <CounterCard
                      label="VIP"
                      name="vipCount"
                      value={attendance.vipCount || ""}
                      onChange={updateAttendance}
                    />
                    <CounterCard
                      label="Speakers"
                      name="speakerCount"
                      value={attendance.speakerCount || ""}
                      onChange={updateAttendance}
                    />
                    <CounterCard
                      label="Exhibitors"
                      name="exhibitorCount"
                      value={attendance.exhibitorCount || ""}
                      onChange={updateAttendance}
                    />
                    <CounterCard
                      label="Press / Media"
                      name="pressCount"
                      value={attendance.pressCount || ""}
                      onChange={updateAttendance}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 3: Venue & Catering ─────────────────── */}
            {step === 2 && (
              <div className="space-y-4">
                <AccordionSection
                  title="Venue Requirements"
                  isOpen={openAccordion === "venue"}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === "venue" ? null : "venue")
                  }
                >
                  <CheckboxGroup
                    items={[
                      "Ballroom",
                      "Historic Venue",
                      "Breakout Rooms",
                      "Green Rooms",
                      "Registration Area",
                      "VIP Lounge",
                      "Speaker Ready Room",
                      "Back-of-House Production Office",
                      "Catering Prep Kitchen",
                      "Freight Elevator",
                      "Loading Dock",
                      "Coat Check",
                      "ADA Accessibility",
                      "Secure Storage",
                      "Wi-Fi",
                      "High-Speed Internet",
                      "Power Distribution",
                    ]}
                    selected={venueRequirements}
                    onToggle={(i) =>
                      toggleList(i, venueRequirements, setVenueRequirements)
                    }
                  />
                </AccordionSection>

                <AccordionSection
                  title="Room Setup"
                  isOpen={openAccordion === "room"}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === "room" ? null : "room")
                  }
                >
                  <RadioGroup
                    items={[
                      "Theater",
                      "Classroom",
                      "Banquet",
                      "Cabaret",
                      "Hollow Square",
                      "U-Shape",
                      "Conference",
                      "Cocktail Style",
                      "Standing Reception",
                      "Custom Layout",
                    ]}
                    selected={roomSetup}
                    onSelect={setRoomSetup}
                  />
                </AccordionSection>

                <AccordionSection
                  title="Food & Beverage Details"
                  isOpen={openAccordion === "fb"}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === "fb" ? null : "fb")
                  }
                >
                  <div className="space-y-6">
                    <CheckboxGroup
                      title="Breakfast"
                      items={[
                        "Continental",
                        "Full Breakfast",
                        "Executive Breakfast",
                      ]}
                      selected={foodDetailed.breakfast}
                      onToggle={(i) =>
                        toggleNestedList(
                          "breakfast",
                          i,
                          foodDetailed,
                          setFoodDetailed,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Lunch"
                      items={[
                        "Box Lunches",
                        "Buffet",
                        "Plated Lunch",
                        "Food Stations",
                      ]}
                      selected={foodDetailed.lunch}
                      onToggle={(i) =>
                        toggleNestedList(
                          "lunch",
                          i,
                          foodDetailed,
                          setFoodDetailed,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Dinner"
                      items={[
                        "Buffet",
                        "Plated Dinner",
                        "Multi-Course Dinner",
                        "Chef's Table Experience",
                      ]}
                      selected={foodDetailed.dinner}
                      onToggle={(i) =>
                        toggleNestedList(
                          "dinner",
                          i,
                          foodDetailed,
                          setFoodDetailed,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Reception"
                      items={[
                        "Passed Hors d'oeuvres",
                        "Cocktail Reception",
                        "Grazing Tables",
                        "Dessert Display",
                        "Late-Night Snacks",
                      ]}
                      selected={foodDetailed.reception}
                      onToggle={(i) =>
                        toggleNestedList(
                          "reception",
                          i,
                          foodDetailed,
                          setFoodDetailed,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Beverage Service"
                      items={[
                        "Coffee Service",
                        "Tea Service",
                        "Soft Drinks",
                        "Juice Station",
                        "Open Bar",
                        "Premium Bar",
                        "Signature Cocktails",
                        "Wine Pairing",
                        "Champagne Toast",
                      ]}
                      selected={foodDetailed.beverage}
                      onToggle={(i) =>
                        toggleNestedList(
                          "beverage",
                          i,
                          foodDetailed,
                          setFoodDetailed,
                        )
                      }
                    />
                  </div>
                </AccordionSection>

                <AccordionSection
                  title="Culinary Preferences"
                  isOpen={openAccordion === "culinary"}
                  onToggle={() =>
                    setOpenAccordion(
                      openAccordion === "culinary" ? null : "culinary",
                    )
                  }
                >
                  <CheckboxGroup
                    items={[
                      "Kosher",
                      "Halal",
                      "Vegan",
                      "Vegetarian",
                      "Gluten-Free",
                      "Dairy-Free",
                      "Nut-Free",
                      "Custom Dietary Requirements",
                    ]}
                    selected={culinary}
                    onToggle={(i) => toggleList(i, culinary, setCulinary)}
                  />
                </AccordionSection>
              </div>
            )}

            {/* ── Step 4: Production & Design ──────────────── */}
            {step === 3 && (
              <div className="space-y-4">
                <AccordionSection
                  title="Audio Visual & Production"
                  isOpen={openAccordion === "av"}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === "av" ? null : "av")
                  }
                >
                  <div className="space-y-6">
                    <CheckboxGroup
                      title="Audio"
                      items={[
                        "Wireless Microphones",
                        "Podium Microphone",
                        "Lavalier Microphones",
                        "Headset Microphones",
                        "House Sound System",
                        "Line Array Speakers",
                        "Audio Recording",
                      ]}
                      selected={avProduction.audio}
                      onToggle={(i) =>
                        toggleNestedList(
                          "audio",
                          i,
                          avProduction,
                          setAvProduction,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Video"
                      items={[
                        "Projection",
                        "LED Video Wall",
                        "LCD Displays",
                        "Confidence Monitors",
                        "Playback System",
                        "Media Server",
                        "Presentation Management",
                        "Teleprompter",
                      ]}
                      selected={avProduction.video}
                      onToggle={(i) =>
                        toggleNestedList(
                          "video",
                          i,
                          avProduction,
                          setAvProduction,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Lighting"
                      items={[
                        "Stage Wash",
                        "Intelligent Lighting",
                        "Pin Spot Lighting",
                        "Architectural Lighting",
                        "Ambient Lighting",
                        "Custom Gobos",
                        "Dance Floor Lighting",
                      ]}
                      selected={avProduction.lighting}
                      onToggle={(i) =>
                        toggleNestedList(
                          "lighting",
                          i,
                          avProduction,
                          setAvProduction,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Streaming & Broadcast"
                      items={[
                        "Live Streaming",
                        "Hybrid Meeting",
                        "Zoom Integration",
                        "Microsoft Teams",
                        "Webinar Production",
                        "Multi-Camera Broadcast",
                        "Recording Services",
                      ]}
                      selected={avProduction.streaming}
                      onToggle={(i) =>
                        toggleNestedList(
                          "streaming",
                          i,
                          avProduction,
                          setAvProduction,
                        )
                      }
                    />
                    <CheckboxGroup
                      title="Staging"
                      items={[
                        "Custom Stage",
                        "Runway",
                        "Risers",
                        "ADA Ramp",
                        "Pipe & Drape",
                        "Scenic Backdrop",
                        "Custom Fabrication",
                      ]}
                      selected={avProduction.staging}
                      onToggle={(i) =>
                        toggleNestedList(
                          "staging",
                          i,
                          avProduction,
                          setAvProduction,
                        )
                      }
                    />
                  </div>
                </AccordionSection>

                <AccordionSection
                  title="Decor & Design"
                  isOpen={openAccordion === "decor"}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === "decor" ? null : "decor")
                  }
                >
                  <CheckboxGroup
                    items={[
                      "Floral Design",
                      "Lounge Furniture",
                      "Luxury Furniture",
                      "Centerpieces",
                      "Custom Branding",
                      "Vinyl Graphics",
                      "Step & Repeat",
                      "Entrance Feature",
                      "Digital Signage",
                      "LED Decor",
                      "Balloon Design",
                      "Ceiling Treatments",
                      "Draping",
                      "Dance Floor Wrap",
                      "Custom Props",
                      "Themed Environments",
                    ]}
                    selected={decor}
                    onToggle={(i) => toggleList(i, decor, setDecor)}
                  />
                </AccordionSection>

                <AccordionSection
                  title="Entertainment"
                  isOpen={openAccordion === "ent"}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === "ent" ? null : "ent")
                  }
                >
                  <CheckboxGroup
                    items={[
                      "DJ",
                      "Live Band",
                      "Jazz Ensemble",
                      "String Quartet",
                      "Celebrity Entertainment",
                      "Emcee",
                      "Comedian",
                      "Motivational Speaker",
                      "Interactive Performers",
                      "Casino Tables",
                      "Photo Booth",
                      "360 Video Booth",
                      "Magician",
                      "Cultural Entertainment",
                    ]}
                    selected={entertainment}
                    onToggle={(i) =>
                      toggleList(i, entertainment, setEntertainment)
                    }
                  />
                </AccordionSection>

                <AccordionSection
                  title="Event Branding & Print"
                  isOpen={openAccordion === "brand"}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === "brand" ? null : "brand")
                  }
                >
                  <CheckboxGroup
                    items={[
                      "Registration Website",
                      "Event App",
                      "Digital Invitations",
                      "Name Badges",
                      "Credential Printing",
                      "Large-Format Printing",
                      "Signage",
                      "Wayfinding",
                      "Sponsor Branding",
                      "LED Content Design",
                      "Motion Graphics",
                    ]}
                    selected={branding}
                    onToggle={(i) => toggleList(i, branding, setBranding)}
                  />
                </AccordionSection>
              </div>
            )}

            {/* ── Step 5: Finalize ─────────────────────────── */}
            {step === 4 && (
              <div className="space-y-14">
                <div>
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Logistics
                  </h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <FieldCard
                      label="Number of Vendors"
                      name="numVendors"
                      value={fields.numVendors || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Truck Deliveries"
                      name="truckDeliveries"
                      value={fields.truckDeliveries || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Freight Requirements"
                      name="freightRequirements"
                      value={fields.freightRequirements || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Security Requirements"
                      name="securityRequirements"
                      value={fields.securityRequirements || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Insurance Certificates (COIs)"
                      name="insuranceCOIs"
                      value={fields.insuranceCOIs || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Special Permits"
                      name="specialPermits"
                      value={fields.specialPermits || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Electrical Requirements"
                      name="electricalRequirements"
                      value={fields.electricalRequirements || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Storage Needs"
                      name="storageNeeds"
                      value={fields.storageNeeds || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Overnight Security"
                      name="overnightSecurity"
                      value={fields.overnightSecurity || ""}
                      onChange={updateField}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-12">
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Staffing
                  </h4>
                  <CheckboxGroup
                    items={[
                      "Event Manager",
                      "Production Manager",
                      "Technical Director",
                      "Audio Engineer",
                      "Video Engineer",
                      "Lighting Director",
                      "Stage Manager",
                      "Registration Staff",
                      "Hospitality Staff",
                      "Bartenders",
                      "Servers",
                      "Chefs",
                      "Security",
                      "EMT",
                      "Cleaning Crew",
                      "Load-In Crew",
                      "Strike Crew",
                    ]}
                    selected={staffing}
                    onToggle={(i) => toggleList(i, staffing, setStaffing)}
                  />
                </div>

                <div className="border-t border-gray-200 pt-12">
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Budget
                  </h4>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="border border-purple/20 bg-gray-50/50 p-6">
                      <h5 className="mb-1 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                        Total Budget
                      </h5>
                      <p className="mb-4 text-[11px] text-gray-400">
                        Your estimated overall event spend
                      </p>
                      <input
                        type="text"
                        name="estimatedBudget"
                        value={fields.estimatedBudget || ""}
                        onChange={(e) =>
                          updateField("estimatedBudget", e.target.value)
                        }
                        placeholder="e.g. $50,000"
                        className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-2xl font-light text-gray-900 placeholder-gray-300 transition-colors focus:border-purple focus:outline-none"
                      />
                    </div>
                    <div className="border border-purple/20 bg-gray-50/50 p-6">
                      <h5 className="mb-1 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                        Per Guest
                      </h5>
                      <p className="mb-4 text-[11px] text-gray-400">
                        Target spend per attendee
                      </p>
                      <input
                        type="text"
                        name="spendPerGuest"
                        value={fields.spendPerGuest || ""}
                        onChange={(e) =>
                          updateField("spendPerGuest", e.target.value)
                        }
                        placeholder="e.g. $250"
                        className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-2xl font-light text-gray-900 placeholder-gray-300 transition-colors focus:border-purple focus:outline-none"
                      />
                    </div>
                    <FieldCard
                      label="Preferred Pricing Tier"
                      name="pricingTier"
                      value={fields.pricingTier || ""}
                      onChange={updateField}
                    />
                    <FieldCard
                      label="Budget Flexibility"
                      name="budgetFlexibility"
                      value={fields.budgetFlexibility || ""}
                      onChange={updateField}
                    />
                  </div>
                </div>

                {/* File uploads */}
                <div className="border-t border-gray-200 pt-12">
                  <h4 className="mb-2 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Floor Plans, Drawings & Design Concepts
                  </h4>
                  <p className="mb-6 text-sm text-gray-500">
                    Upload floor plans, CAD drawings, renderings, brand
                    guidelines, or any design concepts you would like us to work
                    from. Up to {MAX_FILES} files, 20MB each.
                  </p>

                  <label
                    htmlFor="rfp-attachments"
                    className="flex cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50/50 px-6 py-10 text-center transition-colors duration-200 hover:border-purple hover:bg-purple/5"
                  >
                    <Upload className="mb-3 h-8 w-8 text-purple" />
                    <span className="text-sm font-semibold text-black">
                      Click to upload files
                    </span>
                    <span className="mt-1 text-xs text-gray-500">
                      PDF, DWG, DXF, JPG, PNG, AI, EPS, PSD, DOC, XLS, ZIP
                    </span>
                    <input
                      id="rfp-attachments"
                      type="file"
                      ref={fileInputRef}
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.gif,.webp,.ai,.eps,.psd,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip"
                    />
                  </label>

                  {attachments.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {attachments.map((file, index) => (
                        <li
                          key={`${file.name}-${index}`}
                          className="flex items-center justify-between border border-gray-200 bg-gray-50 px-3 py-2"
                        >
                          <span className="truncate text-sm text-gray-700">
                            {file.name} ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="ml-3 shrink-0 text-red-600 transition-colors hover:text-red-800"
                            aria-label={`Remove ${file.name}`}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-12">
                  <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Additional Information
                  </h4>
                  <div className="space-y-4">
                    <textarea
                      name="eventGoals"
                      value={fields.eventGoals || ""}
                      onChange={(e) =>
                        updateField("eventGoals", e.target.value)
                      }
                      placeholder="Event Goals"
                      rows={3}
                      className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                    />
                    <textarea
                      name="brandGuidelines"
                      value={fields.brandGuidelines || ""}
                      onChange={(e) =>
                        updateField("brandGuidelines", e.target.value)
                      }
                      placeholder="Brand Guidelines"
                      rows={3}
                      className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                    />
                    <textarea
                      name="specialRequests"
                      value={fields.specialRequests || ""}
                      onChange={(e) =>
                        updateField("specialRequests", e.target.value)
                      }
                      placeholder="Special Requests"
                      rows={3}
                      className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-center border-t border-gray-200 pt-12">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={setRecaptchaToken}
                  />
                </div>
              </div>
            )}

            {/* ── Navigation ───────────────────────────────── */}
            <div className="mt-12 flex items-center justify-between">
              <div>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex cursor-pointer items-center gap-2 text-sm tracking-wide text-gray-600 uppercase transition-colors duration-200 hover:text-black"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                )}
              </div>
              <div>
                {step < STEP_LABELS.length - 1 ? (
                  <Button onClick={nextStep}>Continue</Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit RFP Request"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thank You Modal ──────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white px-8 py-12 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-black"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple/10">
                <CheckCircle2 className="h-8 w-8 text-purple" />
              </div>
              <h3 className="mb-3 text-3xl font-bold tracking-wide text-black uppercase">
                Thank You
              </h3>
              <div className="mx-auto mb-6 h-0.5 w-12 bg-purple" />
              <p className="mb-2 text-base leading-relaxed text-gray-600">
                Your request for proposal has been received.
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                Our team will review your selections and reach out shortly with
                a customized proposal.
              </p>
              <div className="mt-8">
                <Button onClick={() => setShowModal(false)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
