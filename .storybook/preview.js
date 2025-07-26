import { lightTheme, darkTheme } from '../src/resources/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from "@storybook/addon-themes"

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        light: lightTheme,
        dark: darkTheme
      },
      defaultTheme: "light"
    })
  ]
};

export default preview;
