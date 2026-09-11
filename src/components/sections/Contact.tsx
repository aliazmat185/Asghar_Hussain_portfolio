"use client";

import { useId, useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { site, contact, social } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCard from "@/components/ui/ContactCard";
import { TikTokIcon, FacebookIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Mail } from "lucide-react";

const platformOptions = [
  "TikTok",
  "Facebook",
  "Instagram",
  "YouTube",
  "Multiple platforms",
  "Other",
];

const serviceOptions = [...services.map((s) => s.name), "Other / Not sure"];

interface FormState {
  name: string;
  platform: string;
  service: string;
  profileUrl: string;
  details: string;
}

const initialState: FormState = {
  name: "",
  platform: "",
  service: "",
  profileUrl: "",
  details: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const formId = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.platform) nextErrors.platform = "Please select a platform.";
    if (!form.service) nextErrors.service = "Please select a service.";
    if (!form.details.trim())
      nextErrors.details = "Please share a few details about your project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const lines = [
      `Hello ${site.fullName},`,
      `My name is ${form.name.trim()}.`,
      `Platform: ${form.platform}`,
      `Service: ${form.service}`,
      ...(form.profileUrl.trim() ? [`Profile: ${form.profileUrl.trim()}`] : []),
      `Project details: ${form.details.trim()}`,
    ];

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const fieldClasses =
    "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus-visible:outline-2 focus-visible:outline-accent";

  return (
    <section id="contact" className="section-anchor mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        number="06"
        eyebrow="Get in touch"
        title="Let's plan your next move."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <ContactCard
            icon={WhatsAppIcon}
            label="WhatsApp"
            value={contact.whatsappDisplay}
            href={buildWhatsAppUrl(
              "Hello M Asghar Hussain, I'd like to discuss my project."
            )}
            external
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={contact.email}
            href={contact.emailHref}
          />
          <ContactCard
            icon={TikTokIcon}
            label="TikTok"
            value={social.tiktok.handle}
            href={social.tiktok.href}
            external
          />
          <ContactCard
            icon={FacebookIcon}
            label="Facebook"
            value="View Profile"
            href={social.facebook.href}
            external
          />
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[22px] border border-border bg-surface p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-name`} className="mb-1.5 block text-sm font-medium text-text">
                Name
              </label>
              <input
                id={`${formId}-name`}
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                className={fieldClasses}
              />
              {errors.name && (
                <p id={`${formId}-name-error`} className="mt-1.5 text-xs text-accent">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-platform`} className="mb-1.5 block text-sm font-medium text-text">
                Platform
              </label>
              <select
                id={`${formId}-platform`}
                value={form.platform}
                onChange={(e) => update("platform", e.target.value)}
                aria-invalid={Boolean(errors.platform)}
                aria-describedby={errors.platform ? `${formId}-platform-error` : undefined}
                className={fieldClasses}
              >
                <option value="">Select a platform</option>
                {platformOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.platform && (
                <p id={`${formId}-platform-error`} className="mt-1.5 text-xs text-accent">
                  {errors.platform}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-service`} className="mb-1.5 block text-sm font-medium text-text">
                Service
              </label>
              <select
                id={`${formId}-service`}
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? `${formId}-service-error` : undefined}
                className={fieldClasses}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id={`${formId}-service-error`} className="mt-1.5 text-xs text-accent">
                  {errors.service}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-profile`} className="mb-1.5 block text-sm font-medium text-text">
                Account / profile URL <span className="text-text-muted">(optional)</span>
              </label>
              <input
                id={`${formId}-profile`}
                type="text"
                value={form.profileUrl}
                onChange={(e) => update("profileUrl", e.target.value)}
                className={fieldClasses}
                placeholder="https://"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-details`} className="mb-1.5 block text-sm font-medium text-text">
                Project details
              </label>
              <textarea
                id={`${formId}-details`}
                value={form.details}
                onChange={(e) => update("details", e.target.value)}
                rows={4}
                aria-invalid={Boolean(errors.details)}
                aria-describedby={errors.details ? `${formId}-details-error` : undefined}
                className={fieldClasses}
              />
              {errors.details && (
                <p id={`${formId}-details-error`} className="mt-1.5 text-xs text-accent">
                  {errors.details}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-dark transition-colors hover:bg-accent/90 sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            Continue on WhatsApp
          </button>
          <p className="mt-3 text-xs text-text-muted">
            Review and send your message in WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}
