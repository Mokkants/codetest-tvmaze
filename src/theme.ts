const theme = {
  palette: {
    primary: "#39c69c",
    secondary: "#666666",
    background: "#ffffff",
    lightGrey: "#ececec",
    darkGrey: "#444444",
    blue: "#4e8ffe",
    fadedGrey: "#888888",
  },
};

export default theme;

export const activeColor = theme.palette.blue;
export const inactiveColor = theme.palette.fadedGrey;

export const newTheme = {
  palette: {
    primary: {
      main: theme.palette.primary,
      contrastText: "#fff",
    },
    secondary: {
      main: theme.palette.secondary,
      contrastText: "#fff",
    },
    activeColor,
    inactiveColor,
  },
  overrides: {
    MuiCheckbox: {
      root: {
        "&$checked": {
          color: `${theme.palette.primary} !important`,
          fill: `${theme.palette.primary} !important`,
        },
      },
    },
  },
};
