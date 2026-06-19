import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Umer Aziz for collaborations and project inquiries.",
};

export default function ContactPage() {
  return <ContactForm />;
}
