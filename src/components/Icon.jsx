/* Unified icon system.
   One family (Lucide), one stroke weight, one optical size scale.
   Decorative by default; pass `label` to expose an accessible name. */

const SIZES = { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 };

export default function Icon({
  as: Glyph,
  size = "md",
  label,
  className,
  ...rest
}) {
  const dim = typeof size === "number" ? size : SIZES[size] ?? SIZES.md;
  const a11y = label
    ? { role: "img", "aria-label": label }
    : { "aria-hidden": true };

  return (
    <Glyph
      size={dim}
      strokeWidth={1.5}
      className={className}
      focusable="false"
      {...a11y}
      {...rest}
    />
  );
}
