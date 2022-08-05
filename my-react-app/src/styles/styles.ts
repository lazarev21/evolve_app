import { createTheme } from "@mui/material";

const Colors = {
  primary: "#fff",
  secondary: "#3366FF",
  grey: "#DADADA",
};

const theme: any = createTheme({
  typography: {
    fontFamily: ["Gilroy", "Roboto"].join(","),
  },

  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    grey: {
      main: Colors.grey,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export { theme };
