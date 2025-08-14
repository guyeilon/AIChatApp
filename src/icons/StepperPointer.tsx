import type { SVGProps } from 'react';

const SvgStepperPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 15"
    {...props}
  >
    <path
      fill="#191919"
      d="M9.403 13.5c-.513.857-1.793.857-2.306 0L.18 1.928C-.332 1.071.308 0 1.333 0h13.834c1.025 0 1.665 1.071 1.153 1.928z"
    />
  </svg>
);
export default SvgStepperPointer;
