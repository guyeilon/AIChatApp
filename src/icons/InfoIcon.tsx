import type { SVGProps } from 'react';

const SvgInfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 23"
    {...props}
  >
    <path
      fill="#0288D1"
      d="M10.084 7.014h1.833v1.833h-1.833zm0 3.667h1.833v5.5h-1.833zm.917-8.25c-5.06 0-9.167 4.106-9.167 9.166s4.107 9.167 9.167 9.167 9.166-4.107 9.166-9.167-4.106-9.166-9.166-9.166m0 16.5c-4.043 0-7.334-3.291-7.334-7.334s3.291-7.333 7.334-7.333 7.333 3.29 7.333 7.333-3.29 7.334-7.333 7.334"
    />
  </svg>
);
export default SvgInfoIcon;
