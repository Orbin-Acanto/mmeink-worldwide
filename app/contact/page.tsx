"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Upload, X } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import EventRFPForm from "@/components/contact/EventRFPForm";

interface FormDataType {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  eventType: string;
  eventDate: string;
  numberOfGuests: string;
  howDidYouHear: string;
  message: string;
  website: string;
  attachments: File[];
  page: string;
}

export default function ContactPage() {
  const MAX_FILE_SIZE = 20 * 1024 * 1024;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formStartTimeRef = useRef<number | null>(null);

  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    eventDate: "",
    numberOfGuests: "",
    howDidYouHear: "",
    message: "",
    website: "",
    attachments: [],
    page: "/contact",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    formStartTimeRef.current = Date.now();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const incomingFiles = Array.from(files);
    const validFiles: File[] = [];
    let hasTooLargeFile = false;

    incomingFiles.forEach((file) => {
      if (file.size <= MAX_FILE_SIZE) {
        validFiles.push(file);
      } else {
        hasTooLargeFile = true;
      }
    });

    if (hasTooLargeFile) {
      setSubmitStatus({
        type: "error",
        message: "Each attachment must be 20MB or smaller.",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setFormData((prev) => ({ ...prev, attachments: [] }));
    }

    if (validFiles.length > 0) {
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...validFiles],
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formData.fullName || !formData.email) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields (Name and Email)",
      });
      setIsSubmitting(false);
      return;
    }

    if (!recaptchaToken) {
      setSubmitStatus({
        type: "error",
        message: "Please complete the reCAPTCHA verification",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key !== "attachments") {
          formDataToSend.append(
            key,
            formData[key as keyof FormDataType] as string,
          );
        }
      });

      formDataToSend.set("recaptchaToken", recaptchaToken);

      if (formStartTimeRef.current) {
        formDataToSend.set("formStartedAt", String(formStartTimeRef.current));
      }

      if (formData.attachments.length > 0) {
        formData.attachments.forEach((file) => {
          formDataToSend.append("attachments", file);
        });
      }

      const response = await fetch("/api/contact-form", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "Thank you for your inquiry! We will get back to you shortly.",
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          eventType: "",
          eventDate: "",
          numberOfGuests: "",
          howDidYouHear: "",
          message: "",
          website: "",
          attachments: [],
          page: "/contact",
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message ||
            "Failed to submit form. Please try again or contact us directly.",
        });

        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to submit form. Please try again or contact us directly.",
      });

      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[90vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/events/exhibitions/gallery/2.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase mb-4">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white mb-6 tracking-tight drop-shadow-2xl">
                Let's Create
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple via-cyan to-purple-light">
                  Something Amazing
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white mx-auto animate-fadeIn animation-delay-200">
                Ready to bring your vision to life? We're here to help make your
                event unforgettable.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#rfp"
                  className="inline-flex items-center px-8 py-3 bg-purple text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:bg-purple/70 hover:shadow-2xl"
                >
                  Build an RFP
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center px-8 py-3 border-2 border-white bg-transparent text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:bg-white hover:text-black"
                >
                  Send a Message
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="relative scroll-mt-32 py-16 sm:py-20 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 p-4 border-l-4 ${
                submitStatus.type === "success"
                  ? "bg-green-50 border-green-500 text-green-800"
                  : "bg-red-50 border-red-500 text-red-800"
              }`}
              role="alert"
            >
              <p className="font-semibold">{submitStatus.message}</p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black mb-6 tracking-tight drop-shadow-2xl">
                Contact <span className="text-purple">Information</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mx-auto animate-fadeIn animation-delay-200 mb-6">
                Reach out to us through any of these channels, and we'll get
                back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-purple/10 text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+18778850705"
                      className="text-gray-600 hover:text-purple transition-colors"
                    >
                      1-877-885-0705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-purple/10 text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-1">Email</h3>
                    <a
                      href="mailto:mtardi@mmeink.com"
                      className="text-gray-600 hover:text-purple transition-colors"
                    >
                      mtardi@mmeink.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-purple-light/10 text-purple-light group-hover:bg-purple-light group-hover:text-white transition-all duration-300 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-1">
                      Headquarters
                    </h3>
                    <p className="text-gray-600">
                      140 Florida St, Farmingdale, NY
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-linear-to-br from-purple/5 to-cyan/5 border-l-4 border-purple">
                <p className="text-gray-700 italic">
                  "We had the most beautiful Bar Mitzvah at the Nassau County
                  Museum of Art, thanks to MMEink. Lauren, Mike, and Joseph
                  worked so hard to make sure the day was absolute perfection.
                  Everything from the decor, to the food, to our amazing MC
                  Levi, was just wonderful. Everyone said that it was the best
                  and most fun celebration they had ever attended. I loved
                  working with Lauren, and with her dedication and talent, the
                  day was just magical."
                </p>
                <p className="text-purple font-semibold mt-4">
                  Valerie Goldstein
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  autoComplete="off"
                  tabIndex={-1}
                  style={{ display: "none" }}
                />

                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Full Name *"
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email *"
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                </div>

                <div>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 transition-colors focus:border-purple focus:outline-none"
                  >
                    <option value="" className="bg-white">
                      Select Event Type
                    </option>
                    <option value="corporate" className="bg-white">
                      Corporate Event
                    </option>
                    <option value="gala" className="bg-white">
                      Gala
                    </option>
                    <option value="conference" className="bg-white">
                      Conference
                    </option>
                    <option value="product-launch" className="bg-white">
                      Product Launch
                    </option>
                    <option value="trade-show" className="bg-white">
                      Trade Show
                    </option>
                    <option value="other" className="bg-white">
                      Other
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    placeholder="Event Date (MM/DD/YYYY)"
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                  <input
                    type="text"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    placeholder="Number of Guests"
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    placeholder="How did you hear about us?"
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event..."
                    rows={5}
                    className="w-full resize-none border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-purple focus:outline-none"
                  />
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-semibold tracking-[0.2em] text-purple uppercase">
                    Floor Plans, Drawings & Design Concepts
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">
                    Share floor plans, CAD drawings, renderings, or design
                    concepts so we can review them ahead of our conversation. Up
                    to 20MB per file.
                  </p>

                  <label
                    htmlFor="contact-attachments"
                    className="flex cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50/50 px-6 py-8 text-center transition-colors duration-200 hover:border-purple hover:bg-purple/5"
                  >
                    <Upload className="mb-3 h-7 w-7 text-purple" />
                    <span className="text-sm font-semibold text-black">
                      Click to upload files
                    </span>
                    <span className="mt-1 text-xs text-gray-500">
                      PDF, DWG, DXF, JPG, PNG, AI, EPS, PSD, DOC, XLS, ZIP
                    </span>
                    <input
                      id="contact-attachments"
                      type="file"
                      ref={fileInputRef}
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.gif,.webp,.ai,.eps,.psd,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip"
                    />
                  </label>

                  {formData.attachments.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {formData.attachments.map((file, index) => (
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

                <div className="flex justify-center py-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={handleRecaptchaChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                  className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-purple text-white font-semibold text-sm tracking-wider uppercase hover:bg-purple-dark transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <EventRFPForm />
      </div>
    </div>
  );
}
