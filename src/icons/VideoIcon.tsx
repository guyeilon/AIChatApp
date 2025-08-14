import type { SVGProps } from 'react';

const SvgVideoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.481 4 2 4h3l-2-4h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413a1.93 1.93 0 0 1-1.413.587h-16q-.824 0-1.412-.587A1.93 1.93 0 0 1 2.481 18V6q0-.824.588-1.412A1.92 1.92 0 0 1 4.481 4m0 6v8h16v-8z"
    />
  </svg>
);
export default SvgVideoIcon;
