import { Box, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { navItems, SubLink } from "../constants/nav-items";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
export default function NavBarLinks() {
  const [anchorEl, setAnchorEl] = React.useState<{ element: HTMLElement | null; index: number | null }>({
    element: null,
    index: null,
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl({ element: event.currentTarget, index });
  };

  const handleClose = () => {
    setAnchorEl({ element: null, index: null });
  };

  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" }, ml: "auto" }}>
      {navItems.map((item, index) =>
        !item.subLinks || item.subLinks.length <= 0 ? (
          <Link key={index} href={`${item.link}`} passHref>
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
        ) : (
          <React.Fragment key={index}>
            <Button
              sx={{
                color: `#62288f`,
                backgroundColor: "white",
                marginTop: "0rem",
                marginBottom: "0rem",
                marginRight: "0.5rem",
              }}
              onClick={(event) => handleClick(event, index)}
              aria-controls={anchorEl.index === index ? `menu-${index}` : undefined}
              aria-haspopup="true"
            >
              {item.title}
              {anchorEl.index === index ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Menu
              id={`menu-${index}`}
              anchorEl={anchorEl.index === index ? anchorEl.element : null}
              open={anchorEl.index === index}
              onClose={handleClose}
            >
              {item.subLinks.map((subLink, subIndex) => (
                <Link key={subIndex} href={subLink.link} style={{ textDecoration: "none" }}>
                  <MenuItem onClick={() => handleClose()} sx={{ color: "text.secondary" }}>
                    {subLink.title}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </React.Fragment>
        )
      )}
    </Box>
  );
}
