"use client";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { LoggedInData } from "../../../models/logged-in-data.model";

export default function Login() {
  const [response, setResponse] = useState<{
    success?: boolean;
    error?: { message: string } | string;
    data?: LoggedInData;
  } | null>(null);
  const loginUser = async (formData: FormData) => {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    formData.append("LoginData", JSON.stringify(loginData));

    try {
      const res = await fetch("api/login", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResponse(data); // Update state with response
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      setResponse({ error: errorMessage });
    }
  };
  return (
    <Container
      sx={{
        color: "text.secondary",
      }}
      maxWidth="xs"
    >
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2, color: "text.secondary" }}>
        <Typography sx={{ color: "text.secondary", textAlign: "center", mb: 1 }}>Sign In</Typography>
        <form action={loginUser}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "30rem",
              width: "100%",
              color: "text.secondary",
            }}
          >
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              autoFocus
              sx={{
                input: { color: "text.secondary" },
                color: "text.secondary",
                marginBottom: "1rem",
                "& label.Mui-focused": { color: "text.secondary" },
              }}
            />
            <TextField
              label="Password"
              name="password"
              fullWidth
              required
              type="password"
              sx={{
                input: { color: "text.secondary" },
                marginBottom: "1rem",
                backgroundColor: "white",
                "& label": { color: "text.secondary" },
                "& label.Mui-focused": { color: "text.secondary" },
              }}
            />

            <Button type="submit">Sign In</Button>
          </Box>
        </form>

        {response?.success && (
          <Typography color="success.main" sx={{ mt: 2, textAlign: "center" }}>
            Successfully logged in!
          </Typography>
        )}

        {response?.error && (
          <Typography color="error.main" sx={{ mt: 2, textAlign: "center" }}>
            {typeof response.error === "string" ? response.error : response.error.message}
          </Typography>
        )}

        {response?.data && (
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="subtitle1">Logged in as:</Typography>
            <Typography sx={{ color: "success.main" }}>{response.data.user.email}</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}
