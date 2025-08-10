import { faChevronRight } from "@fortawesome/pro-regular-svg-icons/faChevronRight"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { Stack } from "@mui/material"

const iconSize: Record<Props["size"], string> = {
  small: "10px",
  medium: "24px",
  large: "34px"
}
const rotation: Record<Props["status"], number> = {
  right: 0,
  down: 90,
  up: -90
}

export interface Props extends Partial<Omit<FontAwesomeIconProps, "size">> {
  size: "small" | "medium" | "large"
  status: "down" | "right" | "up"
}

export const Chevron = ({ size, status, style, ...props }: Props) => (
  <Stack flexDirection="row" alignContent={"center"} justifyContent={"center"} sx={{ minWidth: "14px" }}>
    <FontAwesomeIcon
      fixedWidth={true}
      icon={faChevronRight}
      style={{ color: "text.primary", width: iconSize[size], height: iconSize[size], transform: `rotate(${rotation[status]}deg)`, transition: "transform 200ms ease-in-out", ...style }}
      {...props}
    />
  </Stack>
)
