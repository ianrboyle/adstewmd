"use client";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoImage from "./LogoImage";
import { useState } from "react";
import { Colors } from "../app/providers/ThemeRegistry/colors";
import Link from "next/link";
import NavBarContactInfo from "./NavBarContactInfo";
import CloseIcon from "@mui/icons-material/Close";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = [
  "About Us",
  "Patient Reviews",
  "Blog",
  "Products",
  "Gallery",
  "Contact",
  "Face Procedures",
  "Body",
  "Forms",
  "Payment",
];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: "center", position: "relative" }}>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{ position: "absolute", top: 8, right: 8 }}
        aria-label="close drawer"
      >
        <CloseIcon />
      </IconButton>

      <Divider />
      <List sx={{ mt: "3rem" }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: `#62288f`, backgroundColor: "white" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}>
        <Toolbar>
          <LogoImage logoColor="purple" />
          <Box sx={{ ml: "auto" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { lg: "none" },
                fontSize: "2rem", // Increases the button size
                padding: "1rem", // Increases the clickable area
              }}
            >
              <MenuIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Box>
          <Box>
            <NavBarContactInfo />
            <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" }, ml: "auto" }}>
              {navItems.map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} passHref>
                  <Button
                    sx={{
                      color: `#62288f`,
                      backgroundColor: "white",
                      marginTop: "0rem",
                      marginBottom: "0rem",
                      marginRight: "0.5rem",
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="right"
          PaperProps={{
            sx: {
              width: { xs: "100%", sm: "100%", md: "40%" },
              height: "100vh",
            },
          }}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
