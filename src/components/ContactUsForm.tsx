import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

export const ContactUsForm = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        backgroundColor: "#f3f3f3",
      }}
    >
      <Typography variant="h1" sx={{ color: "text.secondary", fontWeight: "300", fontSize: "2rem" }}>
        Send Us A Message
      </Typography>
      <Typography sx={{ color: "black", fontSize: "1rem", marginBottom: "1.5rem" }}>
        We would love to discuss your options with you! Fill out the form below and a member from our team will be in
        touch with you shortly.
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "30rem",
          width: "100%",
        }}
      >
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          sx={{
            marginBottom: "1rem",
            backgroundColor: "white",
          }}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          required
          sx={{
            marginBottom: "1rem",
            backgroundColor: "white",
          }}
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          required
          sx={{
            marginBottom: "1rem",
            backgroundColor: "white",
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
            backgroundColor: "white",
          }}
        />
        <Button type="submit">Submit</Button>
        <Typography sx={{ color: "black", fontSize: "0.75rem" }}>
          *All indicated fields must be completed. Please include non-medical questions and correspondence only.
        </Typography>
      </Box>
    </Container>
  );
};
