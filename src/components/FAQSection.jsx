import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = ({ faqs }) => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mb: 10 }}>
      {faqs.map((f, idx) => (
        <Accordion
          key={idx}
          disableGutters
          elevation={0}
          sx={{
            border: "1px solid #e6eef8",
            mb: 2,
            borderRadius: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 700, color: "#003366" }}>
              {f.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.75)" }}>
              {f.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
