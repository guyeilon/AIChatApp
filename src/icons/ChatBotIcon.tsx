import type { SVGProps } from 'react';

const SvgChatBotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1C1B1F"
      d="M8 14h8v-.55q0-1.1-1.1-1.775T12 11t-2.9.675T8 13.45zm4-4q.825 0 1.413-.588Q14 8.825 14 8q0-.824-.587-1.412A1.93 1.93 0 0 0 12 6q-.825 0-1.412.588A1.92 1.92 0 0 0 10 8q0 .825.588 1.412Q11.175 10 12 10M2 22V4q0-.825.588-1.413A1.93 1.93 0 0 1 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413A1.93 1.93 0 0 1 20 18H6zm2-4.825L5.175 16H20V4H4z"
    />
  </svg>
);
export default SvgChatBotIcon;
