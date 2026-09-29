export const kebabCase = (value: string): string => value.replace(/[A-Z]/g, "-$&").toLowerCase();
