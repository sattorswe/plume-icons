export const keys = <K extends string>(record: Readonly<Record<K, unknown>>): K[] => Object.keys(record) as K[];

export const fromEntries = <K extends string, V>(pairs: readonly (readonly [K, V])[]): Record<K, V> =>
  Object.fromEntries(pairs) as Record<K, V>;
