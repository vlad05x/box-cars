import React from "react";
import { Box, Typography } from "@mui/material";
import "@/styles/globals.scss";

export default function Home() {
  return (
    <>
      <Box sx={{ padding: 2, textAlign: "center" }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Welcome to Box Cars
        </Typography>
        <Typography variant="body1">
          This is a sample application using Next.js and Material-UI.
        </Typography>
      </Box>
    </>
  );
}
