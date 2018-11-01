import { injectGlobal } from 'react-emotion'
import theme from "../styles/theme"


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

  h2 {
    background: ${theme.base.colors.headerbackground};
    color: ${theme.base.colors.headertitle};
    text-decoration: underline;
  }

  p {
      font-family: ${theme.base.fonts.bodyFamily};
      color: ${theme.base.colors.text};
      background: ${theme.base.colors.background};
      text-align: justify;
      padding: 5px;

  }

  span {
    font-family: ${theme.base.fonts.bodyFamily};
      color: ${theme.base.colors.text};
      text-align: justify;
  }

  li {
    font-family: ${theme.base.fonts.bodyFamily};
      color: ${theme.base.colors.background};
      text-align: justify;
  }

  h1 {
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    color: white;
    background: ${theme.base.colors.link};
    font-family: ${theme.base.fonts.headerFamily};

  }

  h2, h3, h4 {
    font-family: ${theme.base.fonts.headerFamily};
    color: white;
    font-size: 1.8em;
    line-height: 0.7em;
    padding-bottom: 0;
    background: red;
  }

  a {
    text-decoration: none;
    color: ${theme.base.colors.secondary};
  }

`
