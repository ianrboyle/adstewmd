import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordianTitleAndContent } from "../../../interfaces/accordianTitleAndContent";

interface AccordianProps {
  content: AccordianTitleAndContent[];
  title: string;
}
export default function FeaturedServicesAccordian({ content, title }: AccordianProps) {
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
          {title}
        </Typography>
        {content &&
          content.map((ability, index) => (
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
                  {ability.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "black" }}>
                {ability.content &&
                  ability.content.map((text, textIndex) => (
                    <Typography
                      key={textIndex}
                      variant="body1"
                      sx={{
                        color: "black",
                        whiteSpace: "normal",
                        overflow: "hidden",
                        mb: textIndex != ability.content.length - 1 ? "1rem" : "0rem",
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </Box>
  );
}
