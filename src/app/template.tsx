import { AnimatedTemplate } from "@/components/layout/AnimatedTemplate";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AnimatedTemplate>{children}</AnimatedTemplate>;
}
