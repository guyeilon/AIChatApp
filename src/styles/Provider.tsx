import * as React from 'react';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import GlobalStyle from 'styles';
import theme from 'styles/theme';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';
import { prefixer } from 'stylis';

import 'styles/styles.css';
import muiTheme from './muiTheme';

const cacheRtl = createCache({
  key: 'muirtl',

  stylisPlugins: [prefixer, rtlPlugin],
});

const StylesProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <CacheProvider value={cacheRtl}>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  </CacheProvider>
);

export default StylesProvider;
