import { faXmark } from "@fortawesome/pro-solid-svg-icons"
import type { Meta, StoryObj } from "@storybook/react"

import { IconButton } from "./IconButton"

const meta = {
  title: "Example/Icons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: "medium",
    icon: faXmark
  }
}

