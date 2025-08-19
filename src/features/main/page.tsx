"use client";

import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function MainPage() {
  return (
    <>
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
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography variant="body1" sx={{ marginBottom: "30px" }}>
            Find cars for sale and for rent near you
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "3rem", md: "4.375rem" },
              textAlign: "center",
              color: "#fff",
              mb: 4,
            }}
          >
            Find Your Perfect Car
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "space-between",
              mb: 4,
              backgroundColor: "#fff",
              width: { xs: "100%", sm: "90%", md: "950px" },
              maxWidth: "100%",
              borderRadius: { md: "80px", xs: "20px" },
              padding: "20px 20px",
            }}
          >
            <FormControl sx={{ flex: { xs: "100%", sm: "1" } }}>
              <InputLabel sx={{ color: "#050b20" }}>Any Makes</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Any Makes</MenuItem>
                <MenuItem value="bmw">BMW</MenuItem>
                <MenuItem value="audi">Audi</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ flex: { xs: "100%", sm: "1" } }}>
              <InputLabel sx={{ color: "#050b20" }}>Any Models</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Any Models</MenuItem>
                <MenuItem value="x5">X5</MenuItem>
                <MenuItem value="q7">Q7</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ flex: { xs: "100%", sm: "1" } }}>
              <InputLabel sx={{ color: "#050b20" }}>Prices</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">All Prices</MenuItem>
                <MenuItem value="10k">Up to $10,000</MenuItem>
                <MenuItem value="20k">Up to $20,000</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#4455ff", px: 3, flex: 1 }}
            >
              Search Cars
            </Button>
          </Box>

          {/* Категории авто */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["SUV", "Sedan", "Hatchback", "Coupe", "Hybrid"].map((cat) => (
              <Button
                key={cat}
                variant="outlined"
                startIcon={<DirectionsCarIcon />}
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.7)",
                  "&:hover": { borderColor: "#fff" },
                  textTransform: "none",
                  flex: { xs: "40%", sm: "auto" },
                }}
              >
                {cat}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
