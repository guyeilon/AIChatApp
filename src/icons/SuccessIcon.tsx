import type { SVGProps } from 'react';

const SvgSuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 23"
    {...props}
  >
    <path
      fill="#2E7D32"
      d="m15.208 7.546-6.04 6.04-3.292-3.281-1.292 1.292 4.583 4.584 7.334-7.334zM11.001 2.43c-5.06 0-9.167 4.106-9.167 9.166s4.107 9.167 9.167 9.167 9.166-4.107 9.166-9.167-4.106-9.166-9.166-9.166m0 16.5a7.33 7.33 0 0 1-7.334-7.334 7.33 7.33 0 0 1 7.334-7.333 7.33 7.33 0 0 1 7.333 7.333 7.33 7.33 0 0 1-7.333 7.334"
    />
  </svg>
);
export default SvgSuccessIcon;
