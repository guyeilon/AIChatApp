import type { SVGProps } from 'react';

const SvgStepperFirstDay = (props: SVGProps<SVGSVGElement>) => (
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
      fill="url(#stepperFirstDay_svg__a)"
      d="M.5 0h32v32H.5z"
      opacity={0.7}
    />
    <defs>
      <pattern
        id="stepperFirstDay_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#stepperFirstDay_svg__b" transform="scale(.01563)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpElEQVR4nO2YPUpDQRSFv1ILQcFOBREJuABxBy7A5bgBK80O7EVsdQn50cbGQguxMY2CKcXiSmQCow689/KSl8zM+eA2d37IPZl75jEghBBCCCHEEtAGBoDViC/gCTgBVmOStV2z8FA8AttEwsD96P2a+ywDh+4UjPZ7jkUEczEt1oA7t+cLsENmAkQngs1AgBHrwL3b+xU4AlbISICxCOOT0GSMBD+DnxturgKMzfEYeAA+GxbilAUQYB4ceCchSwEq1WWJC1DoDZaRAEFvsMQFKPQGy0iAYN4KBOhXuHa6Jdf58xZegF4FATol1/nzFl6AWJEAzNADugXjTfd74x7QKRhvut9DqAWQCaJbgBKtYboG0XeAkR4yQWSCyAQp0RomE0QmaKSHTBCZIJVM0CKIoneIbp0TYBFE0TuEP64WQB7ARB9C/cA7Xoy5iU+ABRamkgvmTQLwS5Fe4CU3xlzpEzB0iU3S4s3Vtefltlzuw5945ZLXbkIqnLu6boGWq+3G5S79iS1PrRziHdj9q9YGcOG1Q4oxdP/8v+KFEEIIQVZ8A1awtME88PFlAAAAAElFTkSuQmCC"
        id="stepperFirstDay_svg__b"
        width={64}
        height={64}
      />
    </defs>
  </svg>
);
export default SvgStepperFirstDay;
