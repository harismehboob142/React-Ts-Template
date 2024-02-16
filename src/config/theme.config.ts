import { MantineTheme, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colors: {
    dark: [
      "#fff", // : Text
      "#888888",
      "#23262F",
      "#5C5F66",
      "#5A6671", // loading, inputs outline skeleton etc
      "#2C2E33",
      "#242736", // : input bg etc
      "#353741", // : body background
      "#C1C2C5",
      "#C1C2C5",
    ],
  },
  // colorScheme: "light",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  fontFamily: "Manrope",

  components: {
    TextArea: {
      styles: (theme: MantineTheme) => ({
        root: {},
      }),
    },
    Select: {
      styles: (theme: MantineTheme) => ({
        root: {},
      }),
    },
    TextInput: {
      styles: (theme: MantineTheme) => ({
        root: {
          ".mantine-TextInput-input": {
            minHeight: "45px",
            fontWeight: 800,
            borderRadius: 8,
            "::placeholder": {
              color: "#1C3E51",
              fontWeight: 800,
            },
          },
        },
      }),
    },

    Button: {
      styles: (theme: MantineTheme) => ({
        root: {
          background: "#1C3E51",
          minHeight: 42,
          borderRadius: 8,
          ":hover": {
            background: "#0a1921",
          },
        },
      }),
      variants: {
        light: () => ({
          root: {
            background: "white !important",
          },
        }),
        dark: () => ({
          root: {},
        }),
      },
    },
    Title: {
      styles: (theme: MantineTheme) => ({
        root: {},
      }),
    },
  },

  globalStyles: (theme) => ({
    body: {
      padding: 0,
      margin: 0,
    },

    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.colors.gray[5],
      borderRadius: "6px",
    },
    "&::webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.colors.gray[5],
    },

    // "&.mantine-TextInput-resp": {
    //   width: "34rem !important",
    //   [theme.fn.smallerThan("sm")]: {
    //     width: "10rem !important",
    //   },
    // },

    "&.mantine-Div-scrollbarStyles": {
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": {
        width: 6,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.colors.gray[5],
        borderRadius: "6px",
      },
      "&::webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.colors.gray[5],
      },
    },
  }),
} as MantineThemeOverride;
