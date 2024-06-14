export function clsx(
  ...styles: (Record<string, boolean> | string | boolean | null | undefined)[]
): string {
  return styles
    .map(style => {
      if (!style || typeof style === 'boolean') {
        return '';
      }
      if (typeof style === 'string') {
        return style;
      }
      return Object.entries(style)
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(' ');
    })
    .join(' ');
}
