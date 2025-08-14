import type { SVGProps } from 'react';

const SvgFolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <g filter="url(#folderIcon_svg__a)">
      <path
        fill="#FA4E4E"
        fillRule="evenodd"
        d="M7.184 2.467c-1.09 0-1.973.883-1.973 1.973v20.719c0 1.09.883 1.973 1.973 1.973h16.032c1.09 0 1.973-.884 1.973-1.974V8.634l-6.166-6.166z"
        clipRule="evenodd"
      />
    </g>
    <path
      fill="#fff"
      d="M19.207 19.078a3.93 3.93 0 0 1-2.281-.928c-1.264.279-2.466.68-3.668 1.175-.956 1.7-1.85 2.565-2.62 2.565-.155 0-.34-.03-.463-.123a.91.91 0 0 1-.524-.835c0-.278.062-1.05 2.99-2.318a22 22 0 0 0 1.634-3.833c-.37-.741-1.171-2.565-.617-3.492.185-.34.555-.526.956-.495.308 0 .616.155.801.402.401.556.37 1.731-.154 3.462a9.3 9.3 0 0 0 1.911 2.473c.648-.124 1.295-.217 1.942-.217 1.449.03 1.665.71 1.634 1.113 0 1.05-1.017 1.05-1.541 1.05m-8.63 1.916.092-.031c.431-.155.77-.464 1.017-.866a2.44 2.44 0 0 0-1.11.897m4.099-9.272h-.093c-.03 0-.092 0-.123.03-.124.526-.031 1.082.185 1.577a2.6 2.6 0 0 0 .03-1.607m.215 4.481-.03.062-.031-.03c-.278.71-.586 1.42-.925 2.1l.062-.03v.062a18 18 0 0 1 2.096-.619l-.031-.03h.092a9.5 9.5 0 0 1-1.233-1.515m4.192 1.638c-.277 0-.524 0-.801.062.308.155.617.216.925.247.215.031.431 0 .616-.061 0-.093-.123-.248-.74-.248"
    />
    <path
      fill="url(#folderIcon_svg__b)"
      d="M24.611 8.055h-5.01l5.589 5.588v-5.01z"
    />
    <path
      fill="#FDB8B8"
      d="M20.997 8.633h4.193l-6.166-6.166V6.66c0 1.09.884 1.973 1.973 1.973"
    />
    <defs>
      <linearGradient
        id="folderIcon_svg__b"
        x1={20.854}
        x2={26.442}
        y1={6.802}
        y2={12.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.2} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <filter
        id="folderIcon_svg__a"
        width={19.979}
        height={24.912}
        x={5.211}
        y={2.343}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-0.247} />
        <feGaussianBlur stdDeviation={0.062} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend in2="shape" result="effect1_innerShadow_1210_5246" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.247} />
        <feGaussianBlur stdDeviation={0.062} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
        <feBlend
          in2="effect1_innerShadow_1210_5246"
          result="effect2_innerShadow_1210_5246"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgFolderIcon;
