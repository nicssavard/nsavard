import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Code } from "../../code/Code";

export const Content = () => {
  return (
    <Stack sx={{ gridArea: "content" }}>
      <Routes>
        <Route path="/map" element={<div />} />
        <Route path="/code" element={<Code />} />
        <Route path="/" element={<></>} />
      </Routes>
    </Stack>
  )
}
