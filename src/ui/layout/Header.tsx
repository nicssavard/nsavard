import { Stack, Typography } from "@mui/material";
import { Logo } from "./Logo";
import { ThemeToggleIcon } from "../icons/ThemeToggleIcon";
import { Avatar } from "../icons/Avatar";
import { Link } from "react-router-dom";



export const Header = () => {
  return (
    <Stack flexDirection="row" sx={{ height: "56px", borderBottom: theme => `1px solid ${theme.palette.divider}`, px: "28px", backgroundColor: "background.default" }} justifyContent="space-between" alignItems="center" >
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


