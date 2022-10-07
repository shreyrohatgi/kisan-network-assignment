import { Box } from "@mui/material"
import React from "react"
import Routes from "./Routes"

const MainPage = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: 10,
        minHeight: "70vh",
      }}
    >
      <Routes />
    </Box>
  )
}

export default MainPage
