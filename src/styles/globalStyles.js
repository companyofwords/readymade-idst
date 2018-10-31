import { injectGlobal } from 'react-emotion'
import theme from "../styles/theme"
import globals from "../styles/globals"

injectGlobal`
  html, body, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

  }

  article, aside, footer, header, nav, section, figcaption, figure, main {
    display: "block";
  }

  p {
      font-family: ${theme.base.fonts.unstyledFamily};
      text-decoration: underline;
      color: red;
      background: ${theme.base.colors.background};
  }
`
