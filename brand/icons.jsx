/* ============================================================
   Glenur - Custom icon set
   Hand-authored SVG glyphs on a 24px grid at a single 1.5 stroke.
   Style language: squared geometry, miter-corner joins (technical,
   blueprint-like), consistent 3px interior margins. Brand marks
   (GitHub, LinkedIn) are drawn filled so they stay recognisable.
   ============================================================ */

function Svg({ size = 24, filled = false, children, ...rest }) {
  const { strokeWidth, ...props } = rest;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? undefined : strokeWidth ?? 1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* -- Navigation & chrome ------------------------------------ */
export function Menu(props) {
  return (
    <Svg {...props}>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </Svg>
  );
}

export function Close(props) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </Svg>
  );
}

export const X = Close;

export function ChevronRight(props) {
  return (
    <Svg {...props}>
      <path d="M9 5l7 7-7 7" />
    </Svg>
  );
}

export function ChevronDown(props) {
  return (
    <Svg {...props}>
      <path d="M5 9l7 7 7-7" />
    </Svg>
  );
}

export function ArrowRight(props) {
  return (
    <Svg {...props}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <Svg {...props}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </Svg>
  );
}

export function Search(props) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.2 16.2L21 21" />
    </Svg>
  );
}

export function Globe(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.5 3.75 5.6 3.75 9S14.4 18.5 12 21c-2.4-2.5-3.75-5.6-3.75-9S9.6 5.5 12 3z" />
    </Svg>
  );
}

export function Home(props) {
  return (
    <Svg {...props}>
      <path d="M4 11l8-6.5 8 6.5" />
      <path d="M6.5 9.5V20h11V9.5" />
    </Svg>
  );
}

export function LayoutGrid(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </Svg>
  );
}

/* -- Feature & capability ----------------------------------- */
export function Cloud(props) {
  return (
    <Svg {...props}>
      <path d="M17.5 19H7a4 4 0 010-8 6 6 0 0111.6-1.5A4.25 4.25 0 0117.5 19z" />
    </Svg>
  );
}

export function Code2(props) {
  return (
    <Svg {...props}>
      <path d="M9 7l-5 5 5 5" />
      <path d="M15 7l5 5-5 5" />
    </Svg>
  );
}

export function Cpu(props) {
  return (
    <Svg {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10.25" y="10.25" width="3.5" height="3.5" rx="0.5" />
      <path d="M10 3v2M14 3v2M10 19v2M14 19v2" />
      <path d="M3 10h2M3 14h2M19 10h2M19 14h2" />
    </Svg>
  );
}

export function Database(props) {
  return (
    <Svg {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="2.75" />
      <path d="M5 6v12c0 1.52 3.13 2.75 7 2.75s7-1.23 7-2.75V6" />
      <path d="M5 12c0 1.52 3.13 2.75 7 2.75s7-1.23 7-2.75" />
    </Svg>
  );
}

export function FlaskConical(props) {
  return (
    <Svg {...props}>
      <path d="M9.5 3h5" />
      <path d="M10.5 3v5.6L5.4 17.4A2 2 0 007.1 20.5h9.8a2 2 0 001.7-3.1L13.5 8.6V3" />
      <path d="M8 15h8" />
    </Svg>
  );
}

export function Shield(props) {
  return (
    <Svg {...props}>
      <path d="M12 3l7 3v5.5c0 4.4-2.9 8-7 9.5-4.1-1.5-7-5.1-7-9.5V6z" />
    </Svg>
  );
}

export function ShieldCheck(props) {
  return (
    <Svg {...props}>
      <path d="M12 3l7 3v5.5c0 4.4-2.9 8-7 9.5-4.1-1.5-7-5.1-7-9.5V6z" />
      <path d="M9 11.8l2.2 2.2 4.3-4.5" />
    </Svg>
  );
}

export function CheckCircle2(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </Svg>
  );
}

export function Package(props) {
  return (
    <Svg {...props}>
      <path d="M12 3l8 4.4v9.2L12 21l-8-4.4V7.4z" />
      <path d="M4.3 7.6L12 12l7.7-4.4" />
      <path d="M12 12v9" />
    </Svg>
  );
}

export function Mail(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7.5l8.5 5.5 8.5-5.5" />
    </Svg>
  );
}

/* -- Brand marks (filled) ----------------------------------- */
export function Github(props) {
  return (
    <Svg filled {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.49-.01 2.83 0 .27.18.6.69.48A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z" />
    </Svg>
  );
}

export function Linkedin(props) {
  return (
    <Svg filled {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.01 2.5 2.5 0 01.02-5.01zM3 9h4v12H3zM9.5 9h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.44c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.41-2.09 2.87V21h-4z" />
    </Svg>
  );
}

export function Gmail(props) {
  return (
    <Svg filled {...props}>
      <path d="M22 4H2a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 2 6.01V6h20zm-20 2.47l8.74 6.56a1 1 0 001.52 0L22 8.47V18H2V8.47z" />
    </Svg>
  );
}

export function XTwitter(props) {
  return (
    <Svg filled {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </Svg>
  );
}

export function Instagram(props) {
  return (
    <Svg filled {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    </Svg>
  );
}

