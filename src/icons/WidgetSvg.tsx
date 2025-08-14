import type { SVGProps } from 'react';

const SvgWidgetSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={7}
      height={7}
      x={3}
      y={3}
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={7}
      height={7}
      x={3}
      y={14}
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={7}
      height={7}
      x={14}
      y={3}
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={7}
      height={7}
      x={14}
      y={14}
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
  </svg>
);
export default SvgWidgetSvg;
