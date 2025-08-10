import type { Meta, StoryObj } from "@storybook/react"

import { Chevron } from "./Chevron"

const meta = {
  title: "Example/icons/Chevron",
  component: Chevron,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Chevron>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: "medium",
    status: "down"
  }
}
