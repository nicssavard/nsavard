import type { Meta, StoryObj } from "@storybook/react"
import { Box } from "@mui/material";
import { MainLayout } from "./MainLayout"

const meta = {
  title: "Example/Layout/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MainLayout>

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
