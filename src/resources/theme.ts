import { createTheme, Theme, ThemeOptions } from "@mui/material"

/**
 * See ./model.ts for custom Palette properties
 */

const componentOverrides = {
  h1: {
    fontSize: "21px",
    fontWeight: "bold",
    lineHeight: "normal"
  },
  h3: {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "normal"
  },
  tableTitle: {
    fontWeight: "600",
    fontSize: "0.875rem",
    lineHeight: "normal"
  },
  tableContent: {
    fontWeight: "regular",
    fontSize: "0.875rem",
    lineHeight: "normal"
  },
  assetsCheckLabel: {
    fontWeight: "regular",
    fontSize: "0.875rem",
    lineHeight: "normal"
  },
  assetsFields: {
    fontWeight: "500",
    fontSize: "0.875rem",
    lineHeight: "normal"
  },
  assetsInputLabel: {
    fontWeight: "400",
    fontSize: "0.75rem",
    lineHeight: "normal"
  },
  assetsTags: {
    fontWeight: "regular",
    fontSize: "0.75rem",
    lineHeight: "normal"
  },
  assetsNumber: {
    fontWeight: "medium",
    fontSize: "0.625rem",
    lineHeight: "normal"
  },
  layerInfo: {
    fontWeight: "400",
    fontSize: "0.75rem",
    lineHeight: "normal"
  },
  layoutTitle: {
    fontWeight: "bold",
    fontSize: "1rem",
    lineHeight: "normal"
  },
  layoutSubTitle: {
    fontWeight: "600",
    fontSize: "0.875rem",
    lineHeight: "normal"
  },
  layoutContainer: {
    fontWeight: "600",
    fontSize: "0.75rem",
    lineHeight: "normal"
  },
  layoutLayer: {
    fontWeight: "regular",
    fontSize: "0.75rem",
    lineHeight: "normal"
  },
  studioTitle: {
    fontWeight: "bold",
    fontSize: "1rem",
    lineHeight: "normal"
  },
  studioSubTitle: {
    fontWeight: "600",
    fontSize: "0.875rem",
    lineHeight: "normal"
  },
  studioContainer: {
    fontWeight: "600",
    fontSize: "0.75rem",
    lineHeight: "normal"
  },
  studioInfo: {
    fontWeight: "medium",
    fontSize: "0.625rem",
    lineHeight: "normal"
  }
}

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#AECBC4",
      main: "#15745D",
      dark: "#026049"
    },
    secondary: {
      light: "#DADFD9",
      main: "#808E7F",
      dark: "#61765F"
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5"
    },
    text: {
      primary: "#4B4B4B",
      secondary: "#9B9999",
      disabled: "#C0C0C0"
    },
    info: {
      dark: "#4B4B4B",
      main: "#9B9999",
      light: "#e2e2e2"
    },
    success: {
      light: "#E8FAF4",
      main: "#00B47E",
      dark: "#019468"
    },
    warning: {
      light: "#FFF7E4",
      main: "#FFB100",
      dark: "#E49E01"
    },
    error: {
      light: "#FFF6F6",
      main: "#F13655",
      dark: "#DD1133"
    },
    custom: {
      grey: "#9B9999",
      greySecond: "#B9B9B9",
      checkedSelected: "#EEF3F2",
      blueGrey: "#EBEBEB",
      border: "#D6D6D6"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.primary
        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          fontWeight: "500"
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 4
      },
      styleOverrides: {
        root: {
          borderRadius: "0.5rem"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard"
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: { textTransform: "none", lineHeight: "normal" }
      }
    },
  },
  typography: {
    fontFamily: 'Barlow,"IBM Plex Mono"',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    ...componentOverrides
  }
})

export const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#119272",
      main: "#14A984",
      dark: "#17C499",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#A7C0A5",
      main: "#749C71",
      dark: "#5D815A"
    },
    background: {
      default: "#0D0D0D",
      paper: "#262626"
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#787878",
      disabled: "#474747"
    },
    info: {
      dark: "#4B4B4B",
      main: "#9B9999",
      light: "#e2e2e2"
    },
    success: {
      light: "#E8FAF4",
      main: "#00B47E",
      dark: "#019468"
    },
    warning: {
      light: "#FFF7E4",
      main: "#FFB100",
      dark: "#E49E01"
    },
    error: {
      light: "#FFF6F6",
      main: "#F13655",
      dark: "#DD1133"
    },
    custom: {
      grey: "#7D7B7B",
      greySecond: "#686767",
      checkedSelected: "#1B2E29",
      blueGrey: "#242424",
      border: "#242424"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.primary
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            // boxShadow: "0 4px 12px -4px rgba(0, 0, 0, 60%)"
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          fontWeight: "500"
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 4
      },
      styleOverrides: {
        root: {
          borderRadius: "0.5rem"
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: "1.25rem"
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingBottom: "2rem",
          fontWeight: 700,
          fontSize: "1.5rem"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard"
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained" // default for "main action" button, "alternate action" should be outlined
      },
      styleOverrides: {
        root: { textTransform: "none", lineHeight: "normal" }
      }
    },
  },
  typography: {
    fontFamily: 'Barlow,"IBM Plex Mono"',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    ...componentOverrides
  }
})
