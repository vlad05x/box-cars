import Image from "next/image";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { cardsData } from "../brandsData";

export default function BrandsCard() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {cardsData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: { xs: "100%", sm: "45%", lg: "210px" },
            height: "180px",
            borderRadius: "16px",
            border: "1px solid #e9e9e9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: 6,
              transform: "translateY(-5px)",
            },
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Image src={card.icon} alt={card.text} width={50} height={50} />
          </Box>
          <CardContent sx={{ padding: 0, textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, color: "#050b20" }}
            >
              {card.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
