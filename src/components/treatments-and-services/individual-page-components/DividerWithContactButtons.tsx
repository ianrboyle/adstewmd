import { Box, Button, Divider } from "@mui/material";

export default function DividerWithContactButtons() {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Divider
          sx={{
            width: "100%",
            margin: "0 auto",
            backgroundColor: "#e0e0e0",
          }}
          variant="middle"
        />
      </Box>
      <Box sx={{ p: 2, justifyContent: "left", display: "flex" }}>
        <Button sx={{ mr: "2.5rem" }}>Book Online</Button>
        <Button>303-333-6060</Button>
      </Box>
    </>
  );
}
