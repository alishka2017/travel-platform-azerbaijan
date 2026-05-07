// Simple implementation of GROQ tag function
// Based on next-sanity implementation
export function groq(strings: TemplateStringsArray, ...values: any[]): string {
  return strings.reduce((result, string, i) => {
    const value = values[i];
    if (value === undefined || value === null) {
      return result + string;
    }
    return result + string + value;
  }, '');
}