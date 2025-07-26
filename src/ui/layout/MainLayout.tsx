import { Stack } from "@mui/material";
import { Header } from "./Header";
import { Route, Routes } from "react-router-dom";
import { Logo } from "./Logo";
import { Code } from "../../code/Code";



export const MainLayout = () => {

  return (
    <Stack sx={{ height: "100%", width: "100%", backgroundColor: "background.default" }}>
      <Header />
      <Stack sx={{ flex: 1, height: "0", width: "100%" }}>
        <Routes>
          <Route path="/map" element={<Logo />} />
          <Route path="/code" element={<Code />} />
          <Route path="/" element={<></>} />
        </Routes>
      </Stack>

    </Stack >
  )
}


