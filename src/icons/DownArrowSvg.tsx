import type { SVGProps } from 'react';

const SvgDownArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    aria-hidden="true"
    className="downArrowSvg_svg__chevron"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <path
        id="downArrowSvg_svg__a"
        d="M12 15.5a1 1 0 0 1-.707-.293l-4-4a.999.999 0 1 1 1.414-1.414l3.305 3.305 3.293-3.18a1 1 0 0 1 1.39 1.439l-4 3.862A1 1 0 0 1 12 15.5"
      />
    </defs>
    <use xlinkHref="#downArrowSvg_svg__a" fill="#FFF" fillRule="nonzero" />
  </svg>
);
export default SvgDownArrowSvg;
