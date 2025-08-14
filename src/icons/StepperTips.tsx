import type { SVGProps } from 'react';

const SvgStepperTips = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 32"
    {...props}
  >
    <path fill="url(#stepperTips_svg__a)" d="M.5 0h32v32H.5z" opacity={0.7} />
    <defs>
      <pattern
        id="stepperTips_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#stepperTips_svg__b" transform="scale(.01563)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVR4nO2aa4hVVRTHf5qVmmNmdgsJ7GmRZTUWfYoe0MNmtKwoErKiDwYhOX4JiqC8EQh+6OmXnkRYWB/SPiUF5WQRjTYaAykVMWIPfDWjhaZ0Y8H/wGZzzrnn3Dnnnnvu3B8cuNy999prrbP32nuvfaBDhw4d8udKoA/YAOwADgL/6rHfgyqzOvNpE6YBq4AhoJbyGZIzTEbpmASsBA44Bv0BvAU8BFwDzAJO0TNL/1nZ26obtNsPPCGZpWAusN0xYAuwKKUBVncx0O/I2QZcTIvTC4xK4Z+Bnoxk/iKZoxnJzIWlwHEpuh7o8sonANcDa/Rm9wLHgMPAbuBz4NwI2Sbrfcm2oPkALUavY3zVK5uoub07QeC7yWk3Q21dB1YdJyzM06AbgQeBqQnn/GiE8RbgvnEM/BV4CbgNuAiYoihvvy912l0GHAW+BS7xZAZOGFG7ekyVLWZTYn5XJ4eAl4F5McFquzPsfaZrjR8GHgVOStj/Od68v9UbCR+o7LsYmfOk+yHV/Y0U9ABfe8NzdUi9lU7A8+d8wLQUhvvOWy/5FitmO2VdjoNWhLR93tPdbLmjAR2wHdlreourQwwL1vm8IrO97WeAjZouLovU9z7gtJBpclC657arXOWs80XxlXSwkdh0htS5vYmiWCwdfijiYFPTlrXILerJwJ/SJSpQ5zr836R43pEudl5oGhvUqW1wiuZh6WJLY9PYqU4XUDzXSpfvm9npfnVqx9iiOctZDhtma8z+3A4uPsdUZlvdojlVutjWuWG7+mMqhq3z/6jM35wUwRTpYjr5pLUrMXslZA7Fc5502dPMTj9Tp3dRPEuky6fN7LSqTtc1sHUdACohZRWVhcWcONbFHNZy4yon8k5O0W7A2bq6Tqjov+CIm5TJ0qGm3WlT2aaOH0vRJsxQ9z/fMfVY7iRMm8596tySJ6enaFeR8VvGaPx0JxjfTwFMAL6UAq82KCNqSiThRWc9N11yYb6TEPHzfcblSlCeAK5rQH6wJqc1foH6PB6R8KgqWdNwQqQ3JCX2XETdNSr/ScMyDYHsNFj250e1WxtRJywl1pNHUhRthwdiEqNZO+ANtRmsswLZ6HwF+KuRpOgNKdLi6MrqsDp6JEcHBIH3b6XOSZEWN5tyZZmUOxKSy8/CAec7b9OWv5bkXWddnpShAyY6J7sPaWG6nHz9kwnq9yc8lT0umcO6MmtpbgH+0/H0ggzkzdY1mDngTkrCe1L49QxkrZWsjykRc7VROap7vii21jn9zXAuXq+gZHwkxZ8aQxAM5v4XlJBlMTnFpA74ROUmq3TMca63z4h4AgdElQ+r/EJKSi2jJ03SpS0dUFpqYzRgXDhgJtCt7G6fviHa5Fy/tYUDuiMMHBkvU6AW84zIGZvknD45q7udHLAzwsCZCduXliMyIO6Lb1vvr/amyEZ9Ul9ToqW0DIZ8AbrCMTBJDLDvEEtLVUbYljZIbIyGxIAd3hS5G9hVJxlbCs520lhPO9dqSzTsw2KA5fhfcJKy9gFEqblXR+NgJNwcERPO1DfEm1X3hBzVFtyjy5WkW98DLXL1nikVzefgUjXssfuFZxu4KSodNW99L/16n5Y9IW/fzv7jhoVOsiMw/vailerQgfHJ/wlSCPltmzHzAAAAAElFTkSuQmCC"
        id="stepperTips_svg__b"
        width={64}
        height={64}
      />
    </defs>
  </svg>
);
export default SvgStepperTips;
