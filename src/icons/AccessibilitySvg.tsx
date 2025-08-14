import type { SVGProps } from 'react';

const SvgAccessibilitySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M12 16h3.889l1.555 2.5H19M12 8.5V11m0 5v-5m0 0h3.889M12 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
      <path d="M14.882 19.516A5.5 5.5 0 1 1 8.678 11" />
    </g>
  </svg>
);
export default SvgAccessibilitySvg;
