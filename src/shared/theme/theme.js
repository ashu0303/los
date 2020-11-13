import { createMuiTheme } from "@material-ui/core/styles";
import color from "./color-const";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: color.primary,
    },
    secondary: {
      main: "#6e4bff",
    },
  },
  typography: {
    fontFamily: "open-sans",
    fontSize: ".875rem", // 14 pixel is .875 rem
    body2: {
      fontFamily: "open-sans",
      fontSize: "1.1rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        // padding: "20px",
        minWidth: "150px",
      },
    },
    MuiFormControl: {
      // minWidth: "240px",
    },
    MuiInputBase: {
      root: {
        minWidth: "240px",
        minHeight: "23px",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "10.5px 14px",
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 11px) scale(1)",
      },
    },
  },

  props: {
    MuiButton: {
      textTransformation: "none",
      // disableRipple: true,
      // variant: "contained",
      // color: "primary",
    },
  },
});
