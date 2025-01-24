import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { emsculptAbilities } from "../../../../../constants/featured-services/emsculpt";
export default function EmsculptAbilitiesAccordian() {
  return (
    <Box sx={{ mb: "2rem" }}>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "2rem", md: "1.75rem" },
            fontWeight: "400",
            color: "text.secondary",
            mb: "1rem",
          }}
        >
          EMsculpt Neo works to transform your figure in three distinct ways:
        </Typography>
        {emsculptAbilities &&
          emsculptAbilities.map((ability, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                sx={{ backgroundColor: "rgba(205, 178, 232, 0.7)" }}
              >
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "text.secondary",
                    mb: "1rem",
                  }}
                >
                  {ability.ability}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "black" }}>
                {" "}
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    color: "black",
                    whiteSpace: "normal",
                    overflow: "hidden",
                  }}
                >
                  {ability.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </Box>
  );
}
