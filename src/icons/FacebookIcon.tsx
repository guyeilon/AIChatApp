import type { SVGProps } from 'react';

const SvgFacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="url(#facebookIcon_svg__a)"
      d="M27.715 13.985a13.714 13.714 0 1 0-15.9 13.554v-9.586h-3.48v-3.968h3.48v-3.002c0-3.433 2.054-5.338 5.187-5.338q1.544.023 3.068.272v3.377h-1.736a1.99 1.99 0 0 0-2.242 2.14v2.55h3.809l-.629 3.969h-3.17v9.586a13.73 13.73 0 0 0 11.613-13.554"
    />
    <defs>
      <linearGradient
        id="facebookIcon_svg__a"
        x1={4.263}
        x2={23.662}
        y1={4.295}
        y2={23.684}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4676ED" />
        <stop offset={0.19} stopColor="#436DE4" />
        <stop offset={0.49} stopColor="#3C55CD" />
        <stop offset={0.87} stopColor="#302EA8" />
        <stop offset={1} stopColor="#2B1E99" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgFacebookIcon;
