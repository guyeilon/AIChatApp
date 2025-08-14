import type { SVGProps } from 'react';

const SvgInstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <path
      fill="url(#instagramIcon_svg__a)"
      d="M16.999 33.997c9.388 0 16.998-7.61 16.998-16.998S26.387 0 17 0 0 7.61 0 16.999s7.61 16.998 16.999 16.998"
    />
    <path
      fill="#fff"
      d="M22.277 10.567a1.163 1.163 0 1 0 0 2.326 1.163 1.163 0 0 0 0-2.326M17.08 12.092a4.918 4.918 0 1 0-.023 9.836 4.918 4.918 0 0 0 .023-9.836m0 8.057A3.151 3.151 0 1 1 20.22 17a3.163 3.163 0 0 1-3.14 3.127z"
    />
    <path
      fill="#fff"
      d="M20.976 26.95h-7.953a6 6 0 0 1-5.988-5.987V13a6 6 0 0 1 5.988-5.988h7.953a6 6 0 0 1 5.988 5.988v7.964a6 6 0 0 1-5.988 5.988M13.023 8.884a4.13 4.13 0 0 0-4.116 4.116v7.964a4.116 4.116 0 0 0 4.116 4.104h7.953a4.116 4.116 0 0 0 4.116-4.104V13a4.13 4.13 0 0 0-4.116-4.116z"
    />
    <defs>
      <linearGradient
        id="instagramIcon_svg__a"
        x1={29.021}
        x2={4.976}
        y1={4.976}
        y2={29.021}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBE18A" />
        <stop offset={0.21} stopColor="#FCBB45" />
        <stop offset={0.38} stopColor="#F75274" />
        <stop offset={0.52} stopColor="#D53692" />
        <stop offset={0.74} stopColor="#8F39CE" />
        <stop offset={1} stopColor="#5B4FE9" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgInstagramIcon;
