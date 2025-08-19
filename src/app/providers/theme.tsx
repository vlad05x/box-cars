import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
  typography: {
    fontFamily: "var(--font-family, 'DM Sans'), sans-serif",
    fontSize: 16,
    h2: {
      fontFamily: "var(--font-family, 'DM Sans'), sans-serif",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#050b20",
    },
    body1: {
      fontFamily: "var(--font-family, 'DM Sans'), sans-serif",
      fontSize: "0.9375rem",
      fontWeight: 400,
    },
  },
  shape: { borderRadius: 16 },
});
