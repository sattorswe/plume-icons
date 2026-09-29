export type IconAttributes = Readonly<Record<string, string | number>>;

export type IconElement = readonly [tag: string, attributes: IconAttributes];

export type HugeIcon = readonly IconElement[];
