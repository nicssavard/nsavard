import { Link } from "react-router-dom"
import logoDark from "../../resources/logo-dark.png"
import logoLight from "../../resources/logo-light.png"
import { useStore } from "../../store/store"

export const Logo = () => {
  const isDarkMode = useStore(state => state.isDarkMode)
  return (
    <Link style={{ height: "37px", width: "60px" }} to="/"><img style={{ height: "37px", width: "60px" }} src={isDarkMode ? logoDark : logoLight} /></Link>
  )
}
