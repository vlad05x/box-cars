"use client";

import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Blog", href: "/blog" },
  {
    label: "Pages",
    subItems: [
      { label: "Page 1", href: "/page1" },
      { label: "Page 2", href: "/page2" },
      { label: "Page 3", href: "/page3" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);
  const toggleSubmenu = () => setOpenSubmenu(!openSubmenu);

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          color: "#fff",
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "1800px", px: 3 }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 100,
              minHeight: 100,
            }}
          >
            {/* Лого */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/assets/icons/logo_header.svg"
                alt="Logo"
                width={106}
                height={26}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                {navItems.map((item) =>
                  item.subItems ? (
                    <Box
                      key={item.label}
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        "&:hover .dropdown": { display: "flex" },
                      }}
                    >
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        {item.label} <ExpandMore fontSize="small" />
                      </Typography>
                      <Box
                        className="dropdown"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          backgroundColor: "rgba(0,0,0,0.8)",
                          borderRadius: 1,
                          display: "none",
                          minWidth: 150,
                          flexDirection: "column",
                          zIndex: 10,
                        }}
                      >
                        {item.subItems.map((sub) => (
                          <Typography
                            key={sub.label}
                            sx={{
                              p: 1,
                              cursor: "pointer",
                              "&:hover": { opacity: 0.7 },
                            }}
                          >
                            {sub.label}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  ) : (
                    <Typography
                      key={item.label}
                      sx={{ cursor: "pointer", "&:hover": { opacity: 0.7 } }}
                    >
                      {item.label}
                    </Typography>
                  )
                )}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />
                <Typography
                  sx={{ cursor: "pointer", "&:hover": { opacity: 0.7 } }}
                >
                  Sign in
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderWidth: 1,
                    width: 152,
                    height: 48,
                    borderRadius: 46,
                    backgroundColor: "#fff",
                    color: "#050b20",
                    "&:hover": { opacity: 0.7 },
                  }}
                >
                  Submit Listing
                </Button>
              </Box>
            </Box>

            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) =>
            item.subItems ? (
              <Box key={item.label}>
                <ListItemButton onClick={toggleSubmenu}>
                  <ListItemText primary={item.label} />
                  <ExpandMore />
                </ListItemButton>
                <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 4 }}>
                    {item.subItems.map((sub) => (
                      <ListItemButton key={sub.label}>
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <ListItemButton key={item.label}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              gap: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />
              <Typography
                sx={{ cursor: "pointer", "&:hover": { opacity: 0.7 } }}
              >
                Sign in
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                borderWidth: 1,
                width: 152,
                height: 48,
                borderRadius: 46,
                backgroundColor: "#050b20",
                color: "#fff",
                "&:hover": { opacity: 0.7 },
              }}
            >
              Submit Listing
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
