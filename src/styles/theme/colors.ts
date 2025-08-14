const colors = {
  palette: {
    black: {
      600: '#0F0F0F',
      700: '#141414',
      800: '#0F0F0F',
      900: '#0C0C0C',
    },
    natural: {
      50: '#F2F2F2',
      100: '#D7D7D7',
      200: '#C3C3C3',
      300: '#A8A8A8',
      400: '#979797',
      500: '#7D7D7D',
      600: '#727272',
      700: '#595959',
      800: '#454545',
      900: '#353535',
    },
    blue: {
      50: '#E6EEFA',
      100: '#B0CBF0',
      200: '#8AB2E8',
      300: '#548EDE',
      400: '#3379D7',
      500: '#0057CD',
      600: '#004FBB',
      700: '#003E92',
      800: '#003071',
      900: '#002556',
    },
    pink: {
      50: '#FCEBF3',
      100: '#F4C0D9',
      200: '#EFA2C6',
      300: '#E877AC',
      400: '#E45D9C',
      500: '#DD3483',
      600: '#C92F77',
      700: '#9D255D',
      800: '#7A1D48',
      900: '#5D1637',
    },
    purple: {
      500: '#4C41F1',
    },
  },
  alert: {
    info: '#0288D1',
    warning: '#ED6C02',
    error: '#D32F2F',
    success: '#2E7D32',
  },
  background: {
    login:
      'radial-gradient(50% 50% at 50% 50%, rgba(240, 246, 255, 0) 80.21%, rgba(222, 253, 255, 0.6) 100%)',
  },
  button: {
    primary: {
      contained: {
        text: {
          enabled: '#FFFFFF',
          hover: '#FFFFFF',
          active: '#FFFFFF',
          disabled: '#FFFFFF',
        },
        background: {
          enabled: '#191919',
          hover: '#353535',
          active: '#0F0F0F',
          disabled: '#C3C3C3',
        },
      },
      outlined: {
        text: {
          enabled: '#191919',
          hover: '#141414',
          active: '#0F0F0F',
          disabled: '#FFFFFF',
        },
        background: {
          hover: 'rgba(20, 20, 20, 0.1)',
          active: 'rgba(15, 15, 15, 0.1)',
          disabled: '#C3C3C3',
        },
        border: {
          enabled: ' 2px solid #141414',
          hover: ' 2px solid #141414',
          active: '2px solid #0F0F0F',
        },
      },
      text: {
        text: {
          enabled: '#C3C3C3',
          hover: '#FFFFFF',
          active: '#FFFFFf',
          disabled: '#FFFFFF',
        },
      },
    },
    secondary: {
      contained: {
        text: {
          enabled: '#FFFFFF',
          hover: '#FFFFFF',
          active: '#FFFFFF',
          disabled: '#FFFFFF',
        },
        background: {
          enabled: '#0057CD',
          hover: '#003E92',
          active: '#003071',
          disabled: '#C3C3C3',
        },
        border: {
          hover: '1px solid #004FBB',
          active: '1px solid #003E92',
        },
      },
      outlined: {
        text: {
          enabled: '#0057CD',
          hover: '#004FBB',
          active: '#003E92',
          disabled: '#FFFFFF',
        },
        background: {
          hover: 'rgba(0, 79, 187, 0.1)',
          active: 'rgba(0, 62, 146, 0.1)',
          disabled: '#C3C3C3',
        },
        border: {
          enabled: ' 2px solid #004FBB',
          hover: '2px solid #004FBB',
          active: ' 2px solid #003E92',
        },
      },
      text: {
        text: {
          enabled: '#0057CD',
          hover: '#004FBB',
          active: '#003E92',
          disabled: '#C3C3C3',
        },
      },
    },
  },
  field: {
    label: {
      enabled: '#727272',
      hover: '#727272',
      disabled: '#D7D7D7',
      focus: '#191919',
      error: '#191919',
    },
    background: {
      enabled: '#FFFFFF',
      hover: '#F2F2F2',
      disabled: '#FFFFFF',
      focus: '#FFFFFF',
      error: '#FFFFFF',
    },
    border: {
      enabled: ' 1px solid #C3C3C3',
      hover: ' 1px solid #C3C3C3',
      disabled: '1px solid #D7D7D7',
      focus: ' 2px solid #191919',
      error: '2px solid #FA1818',
    },
  },
  text: {
    primary: '#191919',
    secondary: '#0057CD',
  },
};

export default colors;
