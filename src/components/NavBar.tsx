"use client";
import {
  AppBar,
  Box,
  Collapse,
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
import React from "react";
import { navItems } from "../constants/nav-items";
import NavBarLinks from "./NavBarLinks";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handleDropDownToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
        {navItems.map((item, index) =>
          !item.subLinks || item.subLinks.length <= 0 ? (
            <ListItem key={index} disablePadding>
              <Link href={item.link} style={{ textDecoration: "none", display: "flex", width: "100%" }} passHref>
                <ListItemButton
                  onClick={handleDrawerToggle}
                  sx={{ textAlign: "left", color: `#62288f`, backgroundColor: "white", width: "100%" }}
                >
                  <ListItemText sx={{ ml: "1rem" }} primary={item.title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ) : (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleDropDownToggle(index)}
                  sx={{ textAlign: "left", color: `#62288f`, backgroundColor: "white" }}
                >
                  <ListItemText sx={{ ml: "1rem" }} primary={item.title} />
                  {expandedIndex === index ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              {item.subLinks && (
                <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.link}
                        style={{ textDecoration: "none", display: "flex", width: "100%" }}
                        passHref
                      >
                        <ListItemButton
                          key={subLink.link}
                          sx={{
                            pl: 4,
                            textAlign: "left",
                            color: `#62288f`,
                            backgroundColor: "#f9f9f9",
                          }}
                          onClick={handleDrawerToggle}
                        >
                          <ListItemText sx={{ ml: "1rem" }} primary={subLink.title} />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          )
        )}
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}>
        <Toolbar sx={{ zindex: 1 }}>
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
          <Box sx={{ zindex: 1 }}>
            <NavBarContactInfo />
            <NavBarLinks />
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
