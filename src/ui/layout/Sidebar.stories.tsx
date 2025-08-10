import type { Meta, StoryObj } from "@storybook/react"
import { Box } from "@mui/material";
import { Sidebar } from "./Sidebar"

const meta = {
  title: "Example/Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Box sx={{ height: "100vh" }}> <Story /></Box >
    },
  ],
}
