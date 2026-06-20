"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import type { SubmissionError } from "@formspree/core";
import { Rocket } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FORMSPREE_ENDPOINT } from "@/lib/formspree";
import { SPRING_ORGANIC } from "@/lib/motion";
import { cn } from "@/lib/utils";

const INPUT_CLASS =
  "box-border w-full max-w-full rounded-2xl border-2 border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors focus:border-[#FF75A0]/30 focus:outline-none focus:ring-2 focus:ring-[#FF75A0]/30";

interface FormFieldProps {
  label: string;
  name: string;
  errors: SubmissionError | null;
  type?: string;
  multiline?: boolean;
  placeholder?: string;
}

function FormField({
  label,
  name,
  errors,
  type = "text",
  multiline = false,
  placeholder,
}: FormFieldProps) {
  const Input = multiline ? "textarea" : "input";

  return (
    <div className="min-w-0 w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-foreground"
      >
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={multiline ? undefined : type}
        required
        rows={multiline ? 5 : undefined}
        placeholder={placeholder}
        className={cn(INPUT_CLASS, multiline && "resize-none")}
      />
      <ValidationError
        prefix={label}
        field={name}
        errors={errors}
        className="mt-1.5 text-xs text-red-400"
      />
    </div>
  );
}

export function BlueprintForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ENDPOINT);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Vision received! I'll review and respond with a plan.", {
        duration: 5000,
        style: {
          background: "#14142a",
          color: "#f8fafc",
          border: "2px solid rgba(255, 117, 160, 0.35)",
        },
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <GlassCard hover={false} className="contact-form-glass">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={SPRING_ORGANIC}
          className="flex flex-col items-center py-12 text-center"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF75A0]/15 text-[#FF75A0]">
            <Rocket className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Project initialized!</h3>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Your vision is in my queue — expect a thoughtful response soon.
          </p>
        </motion.div>
      </GlassCard>
    );
  }

  return (
    <GlassCard hover={false} className="contact-form-glass w-full min-w-0 overflow-hidden">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground">
          Bring Your Big Idea to Life
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Share your raw vision openly, and let&apos;s engineer it into a
          real-world product.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={SPRING_ORGANIC}
        onSubmit={handleSubmit}
        className="w-full min-w-0 space-y-5"
      >
        <input type="hidden" name="_subject" value="Vision Pitch — Idea Incubator" />
        <input type="hidden" name="form_type" value="vision_pitch" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField
            label="Visionary Name"
            name="name"
            errors={state.errors}
            placeholder="Your name"
          />
          <FormField
            label="Email"
            name="email"
            errors={state.errors}
            type="email"
            placeholder="you@startup.com"
          />
        </div>

        <div className="min-w-0 w-full">
          <label
            htmlFor="whatsapp"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            placeholder="Your WhatsApp Number (with country code)"
            required
            className={INPUT_CLASS}
          />
          <ValidationError
            prefix="WhatsApp"
            field="whatsapp"
            errors={state.errors}
            className="mt-1.5 text-xs text-red-400"
          />
        </div>

        <FormField
          label="The Core Vision"
          name="core_vision"
          errors={state.errors}
          multiline
          placeholder="Describe the problem you're solving and the product you imagine..."
        />
        <FormField
          label="Target Audience"
          name="target_audience"
          errors={state.errors}
          placeholder="Who is this for? Be specific."
        />
        <FormField
          label="Tech Requirements"
          name="tech_requirements"
          errors={state.errors}
          multiline
          placeholder="Platforms, integrations, stack preferences..."
        />

        <ValidationError
          prefix="Form"
          errors={state.errors}
          className="text-xs text-red-400"
        />

        <MagneticButton type="submit" disabled={state.submitting} variant="secondary">
          {state.submitting ? "Initializing..." : "Initialize Project"}
          <Rocket className="h-4 w-4" />
        </MagneticButton>
      </motion.form>
    </GlassCard>
  );
}
