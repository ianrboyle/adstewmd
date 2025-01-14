import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Colors } from "./colors";
const roboto = Roboto({
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
      primary: `${Colors.purple}`,
      secondary: `${Colors.purple}`,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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
          color: `${Colors.purple}`, // Set icons color to purple
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: `${Colors.purple}`, // Set icons color to purple
          color: "#FFFFFF",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundImage: "linear-gradient(to bottom, #C086F9, #DFCDF1)",
          },
          marginTop: "1rem",
          marginBottom: "1rem",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: `${Colors.purple}`, // Set icons color to purple
        },
      },
    },
  },
});
