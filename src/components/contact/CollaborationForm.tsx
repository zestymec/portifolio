"use client";



import { motion } from "framer-motion";

import { useForm, ValidationError } from "@formspree/react";

import type { SubmissionError } from "@formspree/core";

import { Send } from "lucide-react";

import { useEffect } from "react";

import toast from "react-hot-toast";

import { GlassCard } from "@/components/ui/GlassCard";

import { MagneticButton } from "@/components/ui/MagneticButton";

import { FORMSPREE_ENDPOINT } from "@/lib/formspree";

import { SPRING_ORGANIC } from "@/lib/motion";

import { cn } from "@/lib/utils";



interface FormFieldProps {

  label: string;

  name: string;

  errors: SubmissionError | null;

  type?: string;

  required?: boolean;

  multiline?: boolean;

  placeholder?: string;

}



function FormField({

  label,

  name,

  errors,

  type = "text",

  required = true,

  multiline = false,

  placeholder,

}: FormFieldProps) {

  const Input = multiline ? "textarea" : "input";



  return (

    <div>

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

        required={required}

        rows={multiline ? 5 : undefined}

        placeholder={placeholder ?? `Enter your ${label.toLowerCase()}`}

        className={cn(

          "box-border w-full max-w-full cursor-text rounded-2xl border-2 border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground",

          "placeholder:text-muted/50 transition-colors",

          "focus:outline-none focus:ring-2 focus:ring-[#C4F042]/30 focus:border-[#C4F042]/30",

          multiline && "resize-none"

        )}

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



export function CollaborationForm() {

  const [state, handleSubmit] = useForm(FORMSPREE_ENDPOINT);



  useEffect(() => {

    if (state.succeeded) {

      toast.success("Message sent! I'll get back to you within 24 hours.", {

        duration: 5000,

        style: {

          background: "#14142a",

          color: "#f8fafc",

          border: "2px solid rgba(196, 240, 66, 0.3)",

        },

      });

    }

  }, [state.succeeded]);



  if (state.succeeded) {

    return (

      <GlassCard hover={false} className="contact-form-glass w-full min-w-0 overflow-hidden">

        <motion.div

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={SPRING_ORGANIC}

          className="flex flex-col items-center py-12 text-center"

        >

          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C4F042]/15 text-[#C4F042]">

            <Send className="h-8 w-8" />

          </div>

          <h3 className="text-xl font-bold text-foreground">

            Message delivered!

          </h3>

          <p className="mt-2 max-w-sm text-sm text-muted">

            Thanks for reaching out — check your inbox for my reply soon.

          </p>

        </motion.div>

      </GlassCard>

    );

  }



  return (

    <GlassCard hover={false} className="contact-form-glass w-full min-w-0 overflow-hidden">

      <div className="mb-6">

        <h3 className="text-xl font-bold text-foreground">

          Let&apos;s Build Together

        </h3>

        <p className="mt-1 text-sm text-muted">

          General inquiries, partnerships, and collaboration ideas.

        </p>

      </div>



      <motion.form

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={SPRING_ORGANIC}

        onSubmit={handleSubmit}

        className="space-y-5"

      >

        <input type="hidden" name="_subject" value="Collaboration Inquiry" />



        <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2">

          <FormField

            label="Full Name"

            name="name"

            errors={state.errors}

            placeholder="Your full name"

          />

          <FormField

            label="Email"

            name="email"

            errors={state.errors}

            type="email"

            placeholder="you@company.com"

          />

        </div>

        <FormField

          label="Subject"

          name="subject"

          errors={state.errors}

          placeholder="What's this about?"

        />

        <FormField

          label="Message"

          name="message"

          errors={state.errors}

          multiline

          placeholder="Tell me about your project or idea..."

        />



        <ValidationError

          prefix="Form"

          errors={state.errors}

          className="text-xs text-red-400"

        />



        <MagneticButton type="submit" disabled={state.submitting} variant="primary">

          {state.submitting ? "Sending..." : "Send Message"}

          <Send className="h-4 w-4" />

        </MagneticButton>

      </motion.form>

    </GlassCard>

  );

}

