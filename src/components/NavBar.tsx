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
  { title: "About Us", link: "/about-us", subItems: [{ title: "Providers", link: "/providers" }] },
  { title: "Patient Reviews", link: "/reviews", subItems: [] },
  { title: "Products", link: "/products", subItems: [] },
  { title: "Gallery", link: "/gallery", subItems: [] },
  { title: "Contact", link: "/contact", subItems: [] },
  {
    title: "Face Procedures",
    link: "/services/face",
    subItems: [
      { title: "Botox", link: "/services/injectable/botox" },
      { title: "Jeuveau", link: "/services/injectable/jeuveau" },
      { title: "Daxxify", link: "/services/injectable/daxxify" },
      { title: "Microneedling", link: "/services/face/microneedling" },
      { title: "Kybella", link: "/services/injectable/kybella" },
      { title: "Chemical Peels", link: "/services/face/chemical-peels" },
      { title: "Facials", link: "/services/face/facials" },
      { title: "Laser Resurfacing", link: "/services/face/laser-resurfacing" },
      { title: "Fraxel", link: "/services/injectable/fraxel" },
      { title: "Fillers", link: "/services/injectable/fillers" },
      { title: "Sculptra", link: "/services/injectable/sculptra" },
      { title: "AviClear Laser", link: "/services/face/avi-clear" },
      { title: "Diamond Glod", link: "/services/face/diamond-glow" },
    ],
  },
  {
    title: "Body",
    link: "/services/body",
    subItems: [
      { title: "Laser Hair Removal", link: "/services/body/laser-hair-removal" },
      { title: "Coolsculpting Elite", link: "/services/body/coolsculpting" },
      { title: "Emsculpt Neo", link: "/services/body/emsculpt" },
      { title: "Vanquish", link: "/services/body/vanquish" },
      { title: "Cutera Laser Vein Treatment", link: "/services/body/cutera" },
    ],
  },
  {
    title: "Forms",
    link: "/forms",
    subItems: [],
  },
  {
    title: "Payment",
    link: "/payment",
    subItems: [],
  },
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
          <ListItem key={item.link} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: `#62288f`, backgroundColor: "white" }}>
              <ListItemText primary={item.title} />
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
                fontSize: "2rem",
                padding: "1rem",
              }}
            >
              <MenuIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Box>
          <Box>
            <NavBarContactInfo />
            <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" }, ml: "auto" }}>
              {navItems.map((item) => (
                <Link key={item.title} href={`${item.link}`} passHref>
                  <Button
                    sx={{
                      color: `#62288f`,
                      backgroundColor: "white",
                      marginTop: "0rem",
                      marginBottom: "0rem",
                      marginRight: "0.5rem",
                    }}
                  >
                    {item.title}
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
