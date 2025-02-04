"use client";

import { useState } from "react";
import { CardImageProps } from "../../interfaces/card-image-props";
import FeaturedServicesSmallImagesGrid from "./individual-page-components/SmallImagesGrid";
import { Box, TextField, Typography } from "@mui/material";
interface Props {
  sortedServices: CardImageProps[];
}
export default function AllTreatmentsSearchBarAndImages({ sortedServices }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = sortedServices.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: { lg: "100%", xl: "90%" },
        p: { xs: 2, sm: 2, md: 4, xl: 0 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "2rem", md: "2.25rem" },
          color: "text.secondary",
          whiteSpace: "normal",
          overflow: "hidden",
          mt: "1rem",
          mb: "1rem",
          p: 2,
        }}
      >
        All Treatments And Services
      </Typography>
      <Box
        component="form"
        sx={{
          p: 1,
          "& > :not(style)": { m: 1, width: { xs: "95%", sm: "95%", md: "45%", lg: "30%" } },
          color: "text.secondary",
          borderColor: "text.secondary",
        }}
      >
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            color: "text.secondary",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "purple" }, // Default border color
              "&:hover fieldset": { borderColor: "purple" }, // Hover border color
              "&.Mui-focused fieldset": { borderColor: "purple" }, // Focus border color
            },
            "& .MuiInputBase-input": {
              color: "purple", // Text color
            },
            "& .MuiInputLabel-root": {
              color: "purple", // Label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "purple", // Label color when focused
            },
          }}
          id="outlined-basic"
          label="Search Treatments"
          variant="outlined"
        />
      </Box>
      <FeaturedServicesSmallImagesGrid showTitle={false} imageProps={filteredServices} />
    </Box>
  );
}
