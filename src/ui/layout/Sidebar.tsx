import { Stack } from "@mui/material"
import { Icon } from "../icons/Icon"
import { Chevron } from "../icons/Chevron"
import { faClipboardListCheck } from "@fortawesome/pro-regular-svg-icons"
import * as React from "react"

export interface Props {
}
export const Sidebar = ({ }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <Stack alignItems={isExpanded ? "start" : "center"} sx={{ height: "100%", borderRight: theme => `1px solid ${theme.palette.divider}`, width: `${isExpanded ? "100px" : "56px"}`, gridArea: "sidebar", transition: "width 200ms", position: "relative" }}>
      <Stack justifyContent={"space-between"} sx={{ height: "100%", position: "absolute", py: 2 }}>
        <Icon size="medium" icon={faClipboardListCheck} />
        <Chevron size="medium" style={{ width: "16px", height: "16px", cursor: "pointer" }} status={isExpanded ? "right" : "down"} onClick={() => setIsExpanded(!isExpanded)} />
      </Stack>
    </Stack>
  )
}
