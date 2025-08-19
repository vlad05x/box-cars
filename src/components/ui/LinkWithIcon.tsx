import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { ReactNode } from "react";

interface LinkWithIconProps {
  href: string;
  text: string;
  icon?: ReactNode;
  color?: string;
  fontSize?: number;
}

export default function LinkWithIcon({
  href,
  text,
  icon = <ArrowOutwardOutlinedIcon sx={{ fontSize: 20 }} />,
  color = "#050b20",
  fontSize = 15,
}: LinkWithIconProps) {
  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          color,
          fontWeight: 500,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize }}>
          {text}
        </Typography>
        {icon}
      </Box>
    </Link>
  );
}
