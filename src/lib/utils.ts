type ClassValue = string | number | null | boolean | undefined;

export function cls(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
