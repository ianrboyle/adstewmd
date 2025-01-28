import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { navItems } from "../constants/nav-items";
import Link from "next/link";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function NavBarDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleDropDownToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
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
}
