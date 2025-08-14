import type { SVGProps } from 'react';

const SvgLinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="url(#linkedinIcon_svg__a)"
      d="M14 27.715c7.575 0 13.715-6.14 13.715-13.715C27.715 6.426 21.575.286 14 .286 6.426.286.286 6.426.286 14S6.426 27.715 14 27.715"
    />
    <path
      fill="#fff"
      d="M8.25 11.448h2.617v8.537H8.25zm1.323-4.212a1.538 1.538 0 1 1-1.52 1.51 1.53 1.53 0 0 1 1.52-1.51M12.565 11.45h2.55v1.163a2.81 2.81 0 0 1 2.515-1.37c2.683 0 3.18 1.763 3.18 4.062v4.69h-2.617v-4.156c0-.938 0-2.26-1.38-2.26-1.378 0-1.594 1.078-1.594 2.195v4.22h-2.654z"
    />
    <defs>
      <linearGradient
        id="linkedinIcon_svg__a"
        x1={23.7}
        x2={4.301}
        y1={4.301}
        y2={23.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#007AB5" />
        <stop offset={1} stopColor="#0046E5" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLinkedinIcon;
