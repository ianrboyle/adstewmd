import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import {
  laserHairRemovalFAQs,
  sayGoodbyeBody,
  sayGoodbyeTitle,
} from "../../../constants/featured-services/laser-hair-removal";
import FeaturedServiceDescription from "./Description";

export default function LaserFAQs() {
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
          Frequently Asked Questions
        </Typography>
        {laserHairRemovalFAQs &&
          laserHairRemovalFAQs.map((faq, index) => (
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
                  {faq.question}
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
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
      <FeaturedServiceDescription title={sayGoodbyeTitle} body={sayGoodbyeBody} />
    </Box>
  );
}
