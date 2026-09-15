import type { Metadata } from "next";
import { ContactGateway } from "@/components/contact/ContactGateway";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact & CV | Muhammad Umer Aziz",
  description:
    "Get in touch with Muhammad Umer Aziz — download verified CV, initiate technical collaborations, or discuss engineering roles.",
  openGraph: {
    title: "Contact & CV | Muhammad Umer Aziz",
    description:
      "Get in touch with Muhammad Umer Aziz — download verified CV, initiate technical collaborations, or discuss engineering roles.",
  },
};

export default function ContactPage() {
  return <ContactGateway />;
}
