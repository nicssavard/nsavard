import { Stack, Typography } from "@mui/material";
import { ThemeToggleIcon } from "../icons/ThemeToggleIcon";
import { Avatar } from "../icons/Avatar";
import { Link } from "react-router-dom";
import { Logo } from "../icons/Logo";



export const Header = () => {
  return (
    <Stack flexDirection="row" sx={{ height: "100%", px: "28px", backgroundColor: "background.default", borderBottom: theme => `1px solid ${theme.palette.divider}`, gridArea: "header" }} justifyContent="space-between" alignItems="center" >
      <Logo />
      <Stack flexDirection="row" gap="20px" alignItems="center">
        <Link to="/code" style={{ textDecoration: "none" }}><Typography variant="layoutTitle">Code</Typography></Link>
        <Link to="/map" style={{ textDecoration: "none" }}><Typography variant="layoutTitle">map</Typography></Link>
        <ThemeToggleIcon />
        <Avatar />
      </Stack>
    </Stack >
  )
}


