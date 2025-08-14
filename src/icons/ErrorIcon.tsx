import type { SVGProps } from 'react';

const SvgErrorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 23"
    {...props}
  >
    <path
      fill="#D32F2F"
      d="M10.084 14.347h1.833v1.834h-1.833zm0-7.333h1.833v5.5h-1.833zm.908-4.583c-5.06 0-9.158 4.106-9.158 9.166s4.097 9.167 9.158 9.167c5.069 0 9.175-4.107 9.175-9.167s-4.106-9.166-9.176-9.166M11 18.93a7.33 7.33 0 0 1-7.334-7.334 7.33 7.33 0 0 1 7.334-7.333 7.33 7.33 0 0 1 7.333 7.333 7.33 7.33 0 0 1-7.333 7.334"
    />
  </svg>
);
export default SvgErrorIcon;
