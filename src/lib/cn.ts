// Minimal classname composer. Accepts strings and falsy values for conditional
// inclusion: cn("a", isActive && "b"). Does NOT support objects or nested arrays.
// If clsx-style ergonomics ever become necessary, install clsx instead of growing this.
export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}
