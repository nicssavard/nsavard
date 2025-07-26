import { IconDefinition } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export interface IconProps extends Omit<FontAwesomeIconProps, "size"> {
  size: "small" | "medium" | "large"
  icon: IconDefinition
}

const sizeMap = {
  small: "8px",
  medium: "16px",
  large: "24px"
}

export const Icon = ({ size, icon, style, ...props }: IconProps) => <FontAwesomeIcon style={{ height: sizeMap[size], width: sizeMap[size], ...style }} icon={icon} {...props} />
