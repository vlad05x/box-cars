import { Box, Container, Typography } from "@mui/material";
import BrandsCard from "./components/BrandsCard";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Link from "next/link";
import LinkWithIcon from "@/components/ui/LinkWithIcon";

export default function BrandSection() {
  return (
    <Box
      sx={{
        position: "relative",
        top: "-5%",
        backgroundColor: "#f9fbfc",
        borderRadius: "80px 80px 0 0",
        py: { xs: 6, md: 10 }, 
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1400px", px: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", md: "40px" },
              color: "#050b20",
            }}
          >
            Explore Our Premium Brands
          </Typography>
          <LinkWithIcon href="#" text="Show All Brands" />
        </Box>

        <BrandsCard />
      </Container>
    </Box>
  );
}
