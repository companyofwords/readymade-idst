import { createMuiTheme } from "@material-ui/core/styles";
import Color from "color";
import colors from "./colors";

const theme = createMuiTheme({
  base: {
    colors: {
      background: colors.background,
      text: colors.text,
      link: colors.link,
      linkHover: Color(colors.link)
        .lighten(0.1)
        .string(),
      accent: colors.link,
      lines: colors.border
    },
    sizes: {
      linesMargin: "20px"
    },
    fonts: {
      unstyledFamily: `Permanent Marker`,
      styledFamily: "Permanent Marker",
      styledFonts: "300,400,600"
    }
  },
  info: {
    colors: {
      text: colors.text,
      background: colors.background,
      socialIcons: colors.secondary,
      socialIconsHover: colors.link,
      menuLink: colors.secondary,
      menuLinkHover: colors.secondary
    },
    sizes: {
      width: 320,
      headerHeight: 190
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  navigator: {
    colors: {
      background: colors.background,
      postsListItemLink: colors.secondary,
      postsListItemLinkHover: colors.link,
      postsHeader: colors.secondary
    },
    sizes: {
      closedHeight: 80,
      postsListItemH1Font: 1.3,
      postsListItemH2Font: 1.1,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  main: {
    colors: {
      background: colors.background,
      title: colors.headertitle,
      subTitle: colors.headertitle,
      meta: colors.headertitle,
      content: colors.headertitle,
      footer: colors.headertitle,
      contentHeading: colors.headertitle,
      blockquoteFrame: colors.background,
      link: colors.secondary,
      linkHover: colors.link,
      fbCommentsColorscheme: "light"
    },
    sizes: {
      articleMaxWidth: "100em"
    },
    fonts: {
      title: {
        size: 1.9,
        sizeM: 2.5,
        sizeL: 2.7,
        weight: 600,
        lineHeight: 1.1
      },
      subTitle: {
        size: 1.2,
        sizeM: 1.3,
        sizeL: 1.4,
        weight: 300,
        lineHeight: 1.3
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        sizeM: 1.15,
        sizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.5,
        h3Size: 1.3,
        weight: 600,
        lineHeight: 1.1
      },
      footer: {
        size: 1,
        lineHeight: 1.6
      }
    }
  },
  footer: {
    colors: {
      background: colors.background,
      text: Color(colors.text)
        .lighten(0.5)
        .string(),
      link: colors.link,
      linkHover: Color(colors.link)
        .lighten(0.2)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.8,
        lineHeight: 1.4
      }
    }
  },
  bars: {
    colors: {
      background: colors.background,
      icon: colors.primary,
      text: colors.secondary
    },
    sizes: {
      actionsBar: 60,
      infoBar: 60
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  palette: {
    primary: {
      main: colors.link
    },
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  },
  typography: {
    fontFamily: `Permanent Marker, sans-serif`,
    fontSize: 16
  }
});

export default theme;
