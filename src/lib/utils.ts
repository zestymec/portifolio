export function cn(
  ...inputs: (string | undefined | false | null)[]
): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatProficiency(value: number): string {
  return `${Math.min(100, Math.max(0, value))}%`;
}
