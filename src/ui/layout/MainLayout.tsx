import { Box } from "@mui/material";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";



export const MainLayout = () => {
  return (
    <Box sx={{
      height: "100%", width: "100%", backgroundColor: "background.default", display: "grid", gridTemplateColumns: `auto 1fr`, gridTemplateRows: "56px 1fr", gridTemplateAreas: `
          "header  header"
          "sidebar content"
        `}}>
      <Header />
      <Sidebar />
      <Content />
    </Box >
  )
}
