import type { SVGProps } from 'react';

const SvgNoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#191919"
      d="M4.223 20q-.825 0-1.412-.587A1.93 1.93 0 0 1 2.223 18V6q0-.824.588-1.412A1.92 1.92 0 0 1 4.223 4h16q.824 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413a1.93 1.93 0 0 1-1.413.587zm8-7-8-5v10h16V8zm0-2 8-5h-16zm-8-3V6v12z"
    />
  </svg>
);
export default SvgNoteIcon;
