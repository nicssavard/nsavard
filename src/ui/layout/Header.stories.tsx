import type { Meta, StoryObj } from "@storybook/react"
import { Box } from "@mui/material";
import { Header } from "./Header"

const meta = {
  title: "Example/Layout/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Box sx={{ height: "56px" }}> <Story /></Box >
    },
  ],
}
