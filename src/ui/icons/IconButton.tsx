import { IconDefinition } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButtonProps, IconButton as MuiIconButton } from "@mui/material"

export interface IconProps extends IconButtonProps {
  size: "small" | "medium" | "large"
  icon: IconDefinition
}

const sizeMap = {
  small: "8px",
  medium: "16px",
  large: "24px"
}
export const IconButton = ({ size, icon, sx, ...props }: IconProps) => (
  <MuiIconButton sx={{ p: "4px", color: "text.primary", ...sx }} {...props}>
    <FontAwesomeIcon style={{ height: sizeMap[size], width: sizeMap[size] }} icon={icon} />
  </MuiIconButton>
)
