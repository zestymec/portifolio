"use client";

import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROFILE, SOCIAL_LINKS } from "@/data/profile";
import type { ContactFormData, ContactFormErrors } from "@/types";
import { cn } from "@/lib/utils";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
}

function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  multiline = false,
}: FormFieldProps) {
  const Input = multiline ? "textarea" : "input";

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        rows={multiline ? 5 : undefined}
        className={cn(
          "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30",
          error ? "border-red-500/50" : "border-white/10",
          multiline && "resize-none"
        )}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#63b3ed", "#9f7aea", "#68d391"],
    });
  };

  const githubLink = SOCIAL_LINKS.find((l) => l.id === "github");
  const linkedinLink = SOCIAL_LINKS.find((l) => l.id === "linkedin");

  return (
    <section className="relative py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something"
          description="Have a project in mind or want to collaborate? Drop a message — I typically respond within 24 hours."
          align="center"
          className="mx-auto"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <GlassCard hover={false}>
              <h3 className="text-lg font-bold text-foreground">
                Contact Nodes
              </h3>
              <p className="mt-2 text-sm text-muted">
                Reach out through any of these channels
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-accent/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted">{PROFILE.email}</p>
                  </div>
                </a>

                {linkedinLink && (
                  <a
                    href={linkedinLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-accent/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <FaLinkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        LinkedIn
                      </p>
                      <p className="text-xs text-muted">
                        {linkedinLink.username}
                      </p>
                    </div>
                  </a>
                )}

                {githubLink && (
                  <a
                    href={githubLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-accent/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-foreground">
                      <FaGithub className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        GitHub
                      </p>
                      <p className="text-xs text-muted">{githubLink.username}</p>
                    </div>
                  </a>
                )}
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-3">
            <GlassCard hover={false} className="contact-form-glass">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted">
                      Thanks for reaching out. This is a frontend mock — in
                      production, your message would be delivered instantly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL_FORM);
                      }}
                      className="mt-6 text-sm text-accent hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormField
                        label="Name"
                        name="name"
                        value={form.name}
                        error={errors.name}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        error={errors.email}
                        onChange={handleChange}
                      />
                    </div>
                    <FormField
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      error={errors.subject}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Message"
                      name="message"
                      value={form.message}
                      error={errors.message}
                      onChange={handleChange}
                      multiline
                    />

                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
