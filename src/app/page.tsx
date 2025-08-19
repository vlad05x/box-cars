"use client";

import { Box } from "@mui/material";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          height: "950px",
          position: "relative",
          backgroundImage: "url('/assets/images/img-main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }, // чтобы не повторялось
        }}
      ></Box>
    </>
  );
}
