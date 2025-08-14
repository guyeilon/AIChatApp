import type { SVGProps } from 'react';

const SvgLocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413A1.93 1.93 0 0 0 12 8q-.825 0-1.412.587A1.93 1.93 0 0 0 10 10q0 .825.588 1.412Q11.175 12 12 12m0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.463T12 4 7.737 5.737Q6 7.475 6 10.2q0 1.774 1.475 4.062T12 19.35M12 22q-4.024-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.587 2.225T20 10.2q0 2.5-1.987 5.437T12 22"
    />
  </svg>
);
export default SvgLocationIcon;
