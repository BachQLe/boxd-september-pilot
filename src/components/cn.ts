/** Minimal className joiner: filters falsy values and joins with a space. No external deps. */
export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
