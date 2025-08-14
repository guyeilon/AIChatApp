import type { SVGProps } from 'react';

const SvgStepperTellFriend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 32"
    {...props}
  >
    <path
      fill="url(#stepperTellFriend_svg__a)"
      d="M.5 0h32v32H.5z"
      opacity={0.7}
    />
    <defs>
      <pattern
        id="stepperTellFriend_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#stepperTellFriend_svg__b" transform="scale(.01563)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="stepperTellFriend_svg__b"
        width={64}
        height={64}
      />
    </defs>
  </svg>
);
export default SvgStepperTellFriend;
