import { useMediaQuery as useMediaQueryHook } from 'usehooks-ts';
import { useTheme, DefaultTheme } from 'styled-components';

type Direction = 'min' | 'max';

const useMediaQuery = (
  direction: Direction,
  query: keyof DefaultTheme['breakpoints'][Direction],
) => {
  const theme = useTheme();
  return useMediaQueryHook(theme.breakpoints[direction][query]);
};

export default useMediaQuery;
