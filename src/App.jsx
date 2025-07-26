import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from './resources/theme.ts'
import { MainLayout } from './ui/layout/MainLayout'
import { useStore } from "./store/store";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const isDarkMode = useStore(state => state.isDarkMode)

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline>
          <MainLayout />
        </CssBaseline>
      </ThemeProvider>
    </Router>
  )
}

export default App
