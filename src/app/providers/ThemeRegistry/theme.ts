import { Cormorant_Garamond, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/700.css";
import { Colors } from "./colors";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface Components {
    MainMenuFrameComponent: object;
    NavBarFrameComponent: object;
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: `${Colors.purple}`,
    },
    text: {
      primary: `${Colors.white}`,
      secondary: `#62288f`,
    },
  },
  typography: {
    fontFamily: `${roboto.style.fontFamily}, sans-serif, ${cormorantGaramond.style.fontFamily}, serif`,
    h1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontFamily: `${cormorantGaramond.style.fontFamily}, serif`,
      letterSpacing: "0.2rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily: `${roboto.style.fontFamily}, sans-serif`,
      fontWeight: 500,
      letterSpacing: "0.1rem",
    },
    h3: {
      fontSize: "1.rem",
      fontWeight: 400,
      fontFamily: `${roboto.style.fontFamily}, sans-serif`,
      letterSpacing: "0.1rem",
    },
    h4: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.25,
      fontFamily: `${cormorantGaramond.style.fontFamily}, serif`,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: `${roboto.style.fontFamily}, sans-serif`,
    },
    body2: {
      fontSize: "1.75rem",
      fontWeight: 300,
      lineHeight: 1.5,
      fontFamily: `${cormorantGaramond.style.fontFamily}, serif`,
    },
    caption: {
      fontSize: "0.8rem",
      fontStyle: "italic",
      fontWeight: 400,
      fontFamily: `${roboto.style.fontFamily}, sans-serif`,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "uppercase",
      fontFamily: `${roboto.style.fontFamily}, sans-serif`,
    },
  },
  components: {
    MainMenuFrameComponent: {
      styleOverrides: {
        root: {
          width: 250,
          height: 400,
          border: `12px ${Colors.border}`,
          borderStyle: "ridge solid",
          borderRadius: "36px",
          backgroundColor: `${Colors.purple}`,
        },
      },
    },
    NavBarFrameComponent: {
      styleOverrides: {
        root: {
          border: `12px ${Colors.border}`,
          borderStyle: "ridge solid",
          borderRadius: "36px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#62288f", // Set icons color to purple
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: `#62288f`, // Set icons color to purple
          color: "#FFFFFF",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundImage: "linear-gradient(to bottom, #C086F9, #DFCDF1)",
          },
          marginTop: "1rem",
          marginBottom: "1rem",
          fontFamily: `${roboto.style.fontFamily}, sans-serif`,
          fontWeight: 400,
          borderRadius: "1rem 0  1rem 0",
        },
      },
    },
    // overrides typegraphy color
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       color: `${Colors.purple}`,
    //     },
    //   },
    // },
  },
});
