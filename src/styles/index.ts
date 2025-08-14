import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: overlay;
    direction: rtl;
    min-height: 100vh;
  }
  #root {
    height: inherit;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: "Rubik" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;

  }

  a {
    transition: all 0.2s;
    text-decoration: none;
    &:hover {
      opacity: 0.6
    }
    &:visited {
      color: inherit;
    }
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
     list-style: none;
  }
  button {
    all: unset;
    font-family: inherit;

  }

  h1,h2,h3,h4,h5,p{
    margin: 0;
  }
    ::-webkit-scrollbar {

    display: none;
  
  
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.background};
  }
  ::-webkit-scrollbar-thumb {
     border-radius: ${({ theme }) => theme.scrollbar.borderRadius};
  }


 

  
`;

export default GlobalStyle;
