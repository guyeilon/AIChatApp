import type { SVGProps } from 'react';

const SvgStepperWelcome = (props: SVGProps<SVGSVGElement>) => (
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
      fill="url(#stepperWelcome_svg__a)"
      d="M.5 0h32v32H.5z"
      opacity={0.7}
    />
    <defs>
      <pattern
        id="stepperWelcome_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#stepperWelcome_svg__b" transform="scale(.01563)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFd0lEQVR4nO2aaYiVVRzGf+PohE7LhDNOZjVl1IfUCts+iBjtH0wQKpOKsigpW4ygIVuggqKyLInIKFqMFoJI6ksxZoshZlTmRFlhabY42YbaopM3Djwv/Ln3fe8973rvDPeBCzPvOe/5n/Pcc57/ci400UQTTTSRGvsABwJtw8xWKJzhmcBSYB3wJ1Ayn9+ANcBDwFlAK9nY+ihnWzUxFrgL+KVsErU+PwG3Ah0Z2vojQ1s10QJcBfxqDG0FlgGzgSlANzAKOBiYClwMvFj2zjbg0gS2NgKLgdOBQ8zWb9P/Z6h9Y0xbXtgPeNUM3A/M0kR9MBK4HNhsxngZaPewtVaLiwPX/0MPW97bcJ0G2glcmeKMOeFaBOw2i+s07Z3Glvv258QguRzuvQulD4Ett5ZY2Ncw+T0wiWww3UxsvRbujs9nevYFcHhGto4AvtS4TijHxHn5FSMqbqAscZwRt/VadEkkdGVsaxzwncZ/1veleXphF3AS+eDYMoX/JIfFBzgB+Ft2zqvVuQMYUOe55Iep2l3OzgdZu60QXC1bW2odhVvU8Z0cJ3M2sEN23kqj0jEw0rjJ66M6jZDg7QVOzGki84wneK7gcHaO7H4d5WFOVYfVORh35N5rzvw9KdxcUjgXvl32Tw7rcLcab8rYcLsJcHYr0qsXlmset4U1vqnGozM06ELVj03ichr1xVzN5Y2wxk3AoAQjCzgX+qOJ57MkNo1LdPP5KqxxhyZcjiQqfQHwl4ytVP5eDQcBlwH3Kcl6DLghBzGeoDm5tLoCe4AN+rvDRGju83QMI9fJk5S0GJclRmGy9OG/Kun051LwLNCmMd1Or8CA2QH7yyUGiZBTcB8cICIH9Q1GwWV+S9S3pN2yQnGIE8kFwOPAD4aI1zWvNOjWWG63V2BDmQYkyfy6zIIWhOjJKNUKtqqfI+ARxexhaNXRGDC5Q1RfHxyvcb4Na+xT41Gkw9KywokrjDwoFxSEv0GG5ibkgx4dhZK+qKQkzDYRaAUWq3Fh2XMnYA9oYb7By0XANxFnepOKJC44ioNxWnxAQpLkaZnedzFPBWaqcZV5dqaJnnbGzKlHyBXOB3qVkJySYOHVSIizE1qMpsyIqtr8Lh04Rs/uN67M1f4aAUlJmGmOZeSXsESdXjNuw7kqi9Eqfg4lElpVzyzJ00TiUBPAhIWtXarc/FNGQquKDY8CT8iVtTcQCUE9YECuuiruVOefgcPM8zFyQ0F1eLSZyJoQsdtSwLHxIWGavjDX5wqfQdt0CxOUqlyBFNUGB+WOus0E+ssuJW40RG2OW4wMwbUhnsmXhIkmhlgRJwXvMYr5riFhotna1nC/ISUQ1E/V5srpaRBUkV0sEYeEHgU8QThdKx+pwBTD3nuGhLDFh229hSYfSAOn3v/GJKFf8UYQ9dmjnJiE90WCz+JR0SGo9acVxiQkBItPfc8wWXdtQbnMR3m7y8LeLIQxDglBAfQaMsIkQ0KtxacRxlqCd64nCfPV5xkyxPka1F1ojPdYfBJh9BE8HxIuUftLZIheDeqixTBkIYy+27wWCS+o7XYyxM1VCMhSGJOQsFxpvCvC3qGKlKtAH0mGmGaOgKutBRifgzD6kjAropy2t9oNUFK0mNK5S5EfVjVne07C6Ct4T5o63y5d651DThgLvB3CeF7C6ENCkOg8RYGYoV98rCpAGGuR8Lza3NkvHL0FCWMtwduTQS0z8U9eihLGQgUvDvoKFMZCBc8XnQUKY10Er5GEsa6CVw9hXK1b5Ql6VlfBq7cwNoTgFSmMa5XUbGskwStSGNNcgg5LYRzS6M1AGIc0pqcUxmGBvoTCOGzQGSGMK3P8oXRDC+OiqHv6JppoogkKwv/kH67rCYvXLAAAAABJRU5ErkJggg=="
        id="stepperWelcome_svg__b"
        width={64}
        height={64}
      />
    </defs>
  </svg>
);
export default SvgStepperWelcome;
