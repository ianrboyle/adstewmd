import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

export const ContactUs = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography>Contact Us</Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          maxWidth: "30rem",
          width: "100%",
          // border: "1px solid",
        }}
      >
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          required
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          required
          rows={4}
          multiline
          sx={{
            marginBottom: "1rem",
          }}
        />
        <Button type="submit">Submit</Button>
      </Box>
    </Container>
  );
};
