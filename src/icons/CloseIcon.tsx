import type { SVGProps } from 'react';

const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <rect width={34} height={34} x={1} y={1} fill="#F2F2F2" rx={17} />
    <path
      stroke="#191919"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 24 12-12m-12 0 12 12"
    />
    <rect
      width={34}
      height={34}
      x={1}
      y={1}
      stroke="#000"
      strokeWidth={2}
      rx={17}
    />
  </svg>
);
export default SvgCloseIcon;
