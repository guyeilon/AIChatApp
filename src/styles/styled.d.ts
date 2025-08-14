import 'styled-components';

type PaletteSet = Record<
  50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  string
>;

type ButtonAction = Partial<
  Record<'enabled' | 'hover' | 'active' | 'disabled', string>
>;
type ButtonParts = Partial<
  Record<'background' | 'text' | 'border', ButtonAction>
>;
type ButtonVariant = 'contained' | 'outlined' | 'text';
type ButtonSet = Record<ButtonVariant, ButtonParts>;

type FieldAction = Partial<
  Record<'enabled' | 'hover' | 'focus' | 'disabled' | 'error', string>
>;
type FieldSet = Record<'background' | 'label' | 'border', FieldAction>;

type Devices = Record<'mobile' | 'laptop' | 'desktop', string>;

export type ThemeType = {
  colors: {
    palette: {
      black: Partial<PaletteSet>;
      natural: Partial<PaletteSet>;
      blue: Partial<PaletteSet>;
      pink: Partial<PaletteSet>;
      purple: Partial<PaletteSet>;
    };
    alert: Record<'success' | 'error' | 'warning' | 'info', string>;
    background: {
      login: string;
    };
    button: {
      primary: ButtonSet;
      secondary: ButtonSet;
    };
    field: FieldSet;
    text: {
      primary: string;
      secondary: string;
    };
  };
  typography: {
    fonts: Record<
      | 'ploniLight'
      | 'ploniRegular'
      | 'ploniMedium'
      | 'ploniDemiBold'
      | 'ploniBold'
      | 'ploniUltraBold',
      string
    >;
    sizes: Record<
      'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p1' | 'p2' | 'p3' | 'p4',
      string
    >;
    weights: Record<
      'extraBold' | 'bold' | 'semiBold' | 'medium' | 'regular' | 'small',
      number
    >;
  };
  breakpoints: Record<'min' | 'max', Devices>;
  scrollbar: {
    size: {
      width: string;
      height: string;
    };
    background: string;
    borderRadius: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
