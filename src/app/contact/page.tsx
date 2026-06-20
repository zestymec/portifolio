import type { Metadata } from "next";
import { ContactGateway } from "@/components/contact/ContactGateway";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${PROFILE.name} — collaboration terminal and project blueprint forms.`,
};

export default function ContactPage() {
  return <ContactGateway />;
}
