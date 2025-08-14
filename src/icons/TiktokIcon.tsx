import type { SVGProps } from 'react';

const SvgTiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="url(#tiktokIcon_svg__a)"
      d="M14 27.856c7.574 0 13.714-6.14 13.714-13.714S21.574.428 13.999.428C6.425.428.285 6.568.285 14.142S6.425 27.856 14 27.856"
    />
    <path
      fill="#EE1D52"
      fillRule="evenodd"
      d="M17.714 11.628a6.77 6.77 0 0 0 4.014 1.276V10.09a4 4 0 0 1-.835-.094v2.251a6.77 6.77 0 0 1-3.977-1.275v5.778a5.291 5.291 0 0 1-8.227 4.39 5.29 5.29 0 0 0 9.062-3.686v-5.826zm1.031-2.88a3.95 3.95 0 0 1-1.032-2.326v-.375h-.797a3.99 3.99 0 0 0 1.83 2.701m-8.273 10.169a2.42 2.42 0 0 1 2.654-3.752v-2.936a5 5 0 0 0-.834-.047v2.27a2.42 2.42 0 0 0-1.82 4.465"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16.879 10.934a6.77 6.77 0 0 0 3.977 1.276V9.959a4.02 4.02 0 0 1-2.11-1.21 3.99 3.99 0 0 1-1.83-2.702h-2.082v11.416a2.814 2.814 0 1 1-3.246-3.124c.248 0 .495.037.732.113v-2.27a4.943 4.943 0 1 0 4.559 4.568z"
      clipRule="evenodd"
    />
    <path
      fill="#69C9D0"
      fillRule="evenodd"
      d="M20.857 9.958v-.61a3.97 3.97 0 0 1-2.11-.6 3.98 3.98 0 0 0 2.11 1.21m-3.94-3.911v-.694h-2.88V16.75a2.41 2.41 0 0 1-2.41 2.41c-.378 0-.75-.086-1.088-.253a2.42 2.42 0 0 0 4.333-1.454V6.047zm-4.568 6.135v-.648a5 5 0 0 0-.732 0 5.272 5.272 0 0 0-2.936 9.662 5.281 5.281 0 0 1 3.668-9.015"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="tiktokIcon_svg__a"
        x1={4.3}
        x2={23.699}
        y1={4.443}
        y2={23.841}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22004A" />
        <stop offset={0.96} stopColor="#020003" />
        <stop offset={1} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTiktokIcon;
