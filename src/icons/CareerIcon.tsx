import type { SVGProps } from 'react';

const SvgCareerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="careerIcon_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#careerIcon_svg__a)">
      <path
        fill="#fff"
        d="M4 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 20V9q0-.825.588-1.413A1.93 1.93 0 0 1 4 7h5V4q0-.825.588-1.413A1.93 1.93 0 0 1 11 2h2q.825 0 1.413.587Q15 3.175 15 4v3h5q.825 0 1.413.587Q22 8.175 22 9v11q0 .825-.587 1.413A1.93 1.93 0 0 1 20 22zm0-2h16V9h-5q0 .825-.587 1.412A1.93 1.93 0 0 1 13 11h-2q-.825 0-1.412-.588A1.92 1.92 0 0 1 9 9H4zm2-2h6v-.45q0-.425-.238-.788a1.57 1.57 0 0 0-.662-.562 5 5 0 0 0-1.012-.337A5 5 0 0 0 9 15.75q-.575 0-1.087.113-.513.112-1.013.337-.425.2-.662.562A1.4 1.4 0 0 0 6 17.55zm8-1.5h4V15h-4zM9 15q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062A1.44 1.44 0 0 0 9 12q-.625 0-1.062.438A1.44 1.44 0 0 0 7.5 13.5q0 .625.438 1.062Q8.375 15 9 15m5-1.5h4V12h-4zM11 9h2V4h-2z"
      />
    </g>
  </svg>
);
export default SvgCareerIcon;
