import { useStore } from "../../store/store"
import { IconButton } from "./IconButton"
import { faMoon, faSun } from "@fortawesome/pro-regular-svg-icons"


export const ThemeToggleIcon = () => {
  const isDarkMode = useStore(state => state.isDarkMode)
  const setIsDarkMode = useStore(state => state.setIsDarkMode)

  return (
    <IconButton size="medium" sx={{ color: "primary.main" }} icon={isDarkMode ? faMoon : faSun} onClick={() => setIsDarkMode(!isDarkMode)} />
  )
}
