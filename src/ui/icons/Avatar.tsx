import { IconButton, Avatar as MuiAvatar, Popover, Typography } from "@mui/material"
import * as React from "react";

export const Avatar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <IconButton sx={{ p: 0 }} onClick={handleClick} disableRipple>
        <MuiAvatar sx={{ backgroundColor: "primary.main", height: "32px", width: "32px", fontSize: "16px" }}>
          NS
        </MuiAvatar >
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  )
} 
