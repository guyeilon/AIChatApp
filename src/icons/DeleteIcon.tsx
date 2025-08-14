import type { SVGProps } from 'react';

const SvgDeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#191919"
      stroke="#353535"
      d="M5.5 6.098v-.5h-1v-1h5v-1h5v1h5v1h-1v13.5c0 .416-.142.76-.44 1.059a1.43 1.43 0 0 1-1.06.44H7c-.416 0-.76-.142-1.058-.44-.3-.299-.442-.643-.442-1.06zm12 0v-.5h-11v14h11v-13.5Zm-7 2.5v8h-1v-8zm4 0v8h-1v-8z"
    />
  </svg>
);
export default SvgDeleteIcon;
