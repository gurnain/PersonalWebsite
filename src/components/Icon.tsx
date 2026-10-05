import type { IconName } from "@/content";

// Small inline icon set drawn for this site. Brand marks are filled, the rest are strokes.
const strokes: Partial<Record<IconName, React.ReactNode>> = {
  chevron: <path d="m9.5 6 6 6-6 6" />,
  person: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 18.5c1.2-2.2 3.2-3.3 5.5-3.3s4.3 1.1 5.5 3.3" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3 7 7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7" />
    </>
  ),
  external: <path d="M8 6h10v10M18 6 6 18" />,
};

const fills: Partial<Record<IconName, React.ReactNode>> = {
  github: (
    <path d="M12 1.5A10.5 10.5 0 0 0 8.68 21.96c.53.1.72-.23.72-.51v-1.8c-2.92.64-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.07 1.61 1.08 1.61 1.08.94 1.61 2.47 1.15 3.07.88.09-.68.37-1.15.67-1.41-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.89 1.08a10 10 0 0 1 5.26 0c2-1.36 2.88-1.08 2.88-1.08.58 1.45.22 2.52.11 2.79.67.73 1.08 1.67 1.08 2.82 0 4.04-2.46 4.93-4.8 5.19.38.33.71.97.71 1.95v2.89c0 .28.19.61.73.51A10.5 10.5 0 0 0 12 1.5Z" />
  ),
  linkedin: (
    <path d="M4.75 3h14.5C20.22 3 21 3.78 21 4.75v14.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 21 3 20.22 3 19.25V4.75C3 3.78 3.78 3 4.75 3Zm1.3 6.6v8.15h2.6V9.6h-2.6Zm1.3-3.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm3.05 3.9v8.15H13v-4.2c0-1.2.5-1.95 1.55-1.95 1 0 1.4.7 1.4 1.95v4.2h2.6v-4.8c0-2.35-1.2-3.55-3.05-3.55-1.15 0-2 .55-2.5 1.3V9.6h-2.6Z" />
  ),
  email: (
    <path d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v.2l-10 6.1L2 7.7v-.2A2.5 2.5 0 0 1 4.5 5ZM22 9.9v6.6a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16.5V9.9l9.5 5.8c.3.2.7.2 1 0L22 9.9Z" />
  ),
  calendar: (
    <path
      fillRule="evenodd"
      d="M8 2.5a1 1 0 0 1 1 1V5h6V3.5a1 1 0 1 1 2 0V5h1.5A2.5 2.5 0 0 1 21 7.5v11A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-11A2.5 2.5 0 0 1 5.5 5H7V3.5a1 1 0 0 1 1-1ZM5 10.5v8c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-8H5Zm2.5 2h2v2h-2v-2Zm3.5 0h2v2h-2v-2Zm3.5 0h2v2h-2v-2Zm-7 3h2v2h-2v-2Zm3.5 0h2v2h-2v-2Z"
    />
  ),
  globe: (
    <path
      fillRule="evenodd"
      d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm-1.2 2.3c-1.9 1-3.2 2.4-3.9 4.2.9.9 2 1.3 3.2 1.1 1.3-.2 2-.9 2.3-2 .2-1-.1-1.9-.8-2.7-.3-.3-.5-.5-.8-.6Zm6.9 5.8c-1.3-.4-2.5-.1-3.5.8-.9.9-1.2 2-.8 3.2.4 1.2 1.3 1.9 2.6 2.1.5 1 .3 1.9-.5 2.8 2.2-1.1 3.7-3.1 4-5.5-.5-1.5-1.1-2.7-1.8-3.4Zm-9.9 3.1c-.7.9-.7 1.8 0 2.7.7.9 1.6 1.2 2.7.9.9-.9 1.1-1.9.5-2.9-.7-1-1.8-1.3-3.2-.7Z"
    />
  ),
  moon: <path d="M20.5 14.2A8.7 8.7 0 0 1 9.8 3.5a8.8 8.8 0 1 0 10.7 10.7Z" />,
};

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const filled = fills[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? undefined : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {filled ?? strokes[name]}
    </svg>
  );
}
