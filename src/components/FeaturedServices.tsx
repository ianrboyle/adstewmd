import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
export default function FeatureServices() {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 380,
        minHeight: { xs: 240, sm: 261, lg: 261 },
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
        <CardContent>
          <Box textAlign="center">
            <Typography gutterBottom variant="h5" component="div">
              Featured Services
            </Typography>
            <Typography variant="body2" color="text.primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
