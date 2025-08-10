import { lightTheme, darkTheme } from '../src/resources/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from "@storybook/addon-themes"
import { BrowserRouter as Router } from 'react-router-dom';

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
    layout: "fullscreen", // no padding for this story only
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
    }),
    Story => {
      return (
        <Router>
          <Story />
        </Router>
      )
    }
  ]
};

export default preview;
