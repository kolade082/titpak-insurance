import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  MenuItem,
  Paper,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { keyframes } from "@mui/system";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShieldIcon from "@mui/icons-material/Shield";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Home() {
  // Claims form state
  const [claimsForm, setClaimsForm] = useState({
    policyNumber: "",
    dateOfLoss: null,
    email: "",
    phone: "",
    location: "",
    natureOfLoss: "",
    narration: "",
  });

  const handleClaimsFormChange = (field) => (event) => {
    setClaimsForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setClaimsForm((prev) => ({
      ...prev,
      dateOfLoss: date,
    }));
  };

  const handleClaimsSubmit = (event) => {
    event.preventDefault();
    console.log("Claims form submitted:", claimsForm);
    // Here you would typically send the data to your backend
    alert("Claim submitted successfully! We will contact you shortly.");
  };

  const natureOfLossOptions = [
    "Fire",
    "Theft",
    "Accident",
    "Natural Disaster",
    "Water Damage",
    "Vandalism",
    "Other",
  ];

  const benefits = [
    {
      title: "Strong Protection",
      icon: <ShieldIcon sx={{ fontSize: 26 }} />,
      desc: "Policies crafted to keep you covered through life’s uncertainties.",
    },
    {
      title: "Fast Claims",
      icon: <SpeedIcon sx={{ fontSize: 26 }} />,
      desc: "Quick, fair, and transparent claims from start to finish.",
    },
    {
      title: "Human Support",
      icon: <SupportAgentIcon sx={{ fontSize: 26 }} />,
      desc: "Licensed advisors ready to help on phone, and in person.",
    },
  ];

  const services = [
    "Fire Insurance",
    "Marine Insurance",
    "Motor Insurance",
    "Life Insurance",
    "Property Insurance",
    "Business Insurance",
  ];

  const faqs = [
    {
      q: "How do I get a quote?",
      a: "Click “Get a Quote,” answer a few questions, and an advisor will reach out with tailored options.",
    },
    {
      q: "What documents are required?",
      a: "Typically a valid ID, proof of address, and relevant asset details (vehicle, property, cargo).",
    },
    {
      q: "How fast are claims processed?",
      a: "Simple claims are often settled within days once documents are verified.",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 10, px: { xs: 2, md: 4 } }}>
      {/* Hero Section - split layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          mb: 8,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          background: "linear-gradient(135deg, #f7fbff 0%, #eaf3ff 100%)",
          border: "1px solid #e6eef8",
          animation: `${fadeIn} 0.7s ease-in-out`,
        }}
      >
        <Box>
          <Chip
            label="Titpak Insurance Brokers LTD"
            color="primary"
            variant="outlined"
            sx={{
              mb: 2,
              borderColor: "#003366",
              color: "#003366",
              fontWeight: 700,
            }}
          />
          <Typography
            variant="h3"
            sx={{ color: "#003366", fontWeight: 800, lineHeight: 1.15, mb: 2 }}
          >
            Insurance that protects your world
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.72)", mb: 3 }}>
            Simple, transparent coverage for life, home, auto, marine and
            business. Get the right plan with support from real people when you
            need it.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#003366",
                color: "#fff",
                px: 4,
                py: 1.3,
                textTransform: "none",
                borderRadius: 2,
                "&:hover": { backgroundColor: "#004a99" },
              }}
            >
              Get a Quote
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            {["No hidden fees", "Cancel anytime"].map((t, i) => (
              <Stack key={i} direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: 18 }} />
                <Typography variant="caption" sx={{ color: "rgba(0,0,0,0.7)" }}>
                  {t}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Why Choose Titpak */}
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h4"
          sx={{ color: "#003366", mb: 1, textAlign: "center", fontWeight: 800 }}
        >
          Why Choose Titpak
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(0,0,0,0.7)", mb: 4, textAlign: "center" }}
        >
          Benefits that make protection simple and dependable.
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{ mb: 8, maxWidth: 1200, mx: "auto" }}
        justifyContent="center"
      >
        {benefits.map((b, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 3,
                border: "1px solid #e6eef8",
                backgroundColor: "#ffffff",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 16px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <CardContent>
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Avatar
                    sx={{
                      bgcolor: "#e8f1fb",
                      color: "#003366",
                      width: 56,
                      height: 56,
                    }}
                  >
                    {b.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{ color: "#003366", fontWeight: 700 }}
                  >
                    {b.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                    {b.desc}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Our Services (no icons, distinct layout) */}
      <Box sx={{ maxWidth: 1100, mx: "auto", mt: 2 }}>
        <Typography
          variant="h4"
          sx={{ color: "#003366", mb: 1, textAlign: "center", fontWeight: 800 }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(0,0,0,0.7)", mb: 4, textAlign: "center" }}
        >
          Coverage options designed to fit your lifestyle and goals.
        </Typography>
      </Box>
      <Box
        sx={{
          mb: 8,
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 2.5,
        }}
      >
        {services.map((title, idx) => {
          const slug = title.toLowerCase().replace(/\s+/g, "-");
          const descMap = {
            "fire-insurance":
              "Protect against fire, lightning, and allied perils for homes and businesses.",
            "marine-insurance":
              "Cover cargo, hull, and transit risks across sea and inland waterways.",
            "motor-insurance":
              "Comprehensive and third‑party cover for personal and commercial vehicles.",
            "life-insurance":
              "Financial protection for your loved ones with flexible policy options.",
            "property-insurance":
              "Safeguard residential and commercial property from unforeseen losses.",
            "business-insurance":
              "Tailored protection for SMEs and enterprises, including liability cover.",
          };
          const key = slug;
          const desc =
            descMap[key] ||
            "Comprehensive coverage designed around your needs.";
          return (
            <Box
              key={idx}
              sx={{
                border: "1px solid #e6eef8",
                borderRadius: 2,
                p: 2.4,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 0.75,
                transition:
                  "background-color 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "#f8fbff",
                  borderColor: "#d7e6fa",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "#003366", fontWeight: 700 }}
              >
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                {desc}
              </Typography>
              <Box sx={{ mt: 0.5 }}>
                <Button
                  size="small"
                  variant="text"
                  href={`/services/${slug}`}
                  sx={{ textTransform: "none", px: 0, color: "#004a99" }}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Divider sx={{ maxWidth: 1300, mx: "auto", mb: 6 }}>
        <Chip label="FAQs" sx={{ color: "#003366" }} />
      </Divider>

      {/* FAQ Section */}
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

      {/* Claims Form Section */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box
          sx={{
            mx: "auto",
            mb: 12,
            px: { xs: 2, md: 3 },
            maxWidth: 1200,
          }}
        >
          {/* Section Header */}
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
                  width: 64,
                  height: 64,
                  mr: 2,
                  boxShadow: "0 8px 24px rgba(255, 107, 53, 0.3)",
                }}
              >
                <ReportProblemIcon sx={{ fontSize: 32 }} />
              </Avatar>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#003366",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 0.5,
                  }}
                >
                  File a Claim
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(0,0,0,0.6)",
                    fontSize: "1.1rem",
                  }}
                >
                  Quick & secure claim submission
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                maxWidth: 600,
                mx: "auto",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              Report your loss quickly and easily. Our experienced claims team
              will guide you through every step of the process and ensure fair,
              fast resolution.
            </Typography>
          </Box>

          {/* Form Container */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
              border: "1px solid rgba(0, 51, 102, 0.08)",
              boxShadow: "0 20px 60px rgba(0, 51, 102, 0.08)",
            }}
          >
            {/* Form Header */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                color: "white",
                p: { xs: 3, md: 4 },
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Claim Information Form
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.9,
                  fontSize: "0.95rem",
                }}
              >
                Please fill in all required fields to process your claim
                efficiently
              </Typography>
            </Box>

            {/* Form Content */}
            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <form onSubmit={handleClaimsSubmit}>
                {/* Personal Information Section */}
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#003366",
                      fontWeight: 700,
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 24,
                        bgcolor: "#003366",
                        mr: 2,
                        borderRadius: 2,
                      }}
                    />
                    Policy & Contact Information
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Policy Number"
                        value={claimsForm.policyNumber}
                        onChange={handleClaimsFormChange("policyNumber")}
                        required
                        variant="outlined"
                        placeholder="e.g., POL-2024-001234"
                        sx={{
                          minWidth: { xs: 250, md: 500 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <DatePicker
                        label="Date of Loss"
                        value={claimsForm.dateOfLoss}
                        onChange={handleDateChange}
                        maxDate={new Date()}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            required: true,
                            variant: "outlined",
                            sx: {
                              minWidth: { xs: 250, md: 500 },
                            },
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        value={claimsForm.email}
                        onChange={handleClaimsFormChange("email")}
                        required
                        variant="outlined"
                        placeholder="your.email@example.com"
                        sx={{
                          minWidth: { xs: 250, md: 500 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        type="tel"
                        value={claimsForm.phone}
                        onChange={handleClaimsFormChange("phone")}
                        required
                        variant="outlined"
                        placeholder="+234 xxx xxx xxxx"
                        sx={{
                          minWidth: { xs: 250, md: 500 },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Loss Details Section */}
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#003366",
                      fontWeight: 700,
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 24,
                        bgcolor: "#003366",
                        mr: 2,
                        borderRadius: 2,
                      }}
                    />
                    Loss Details
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Location of Loss"
                        value={claimsForm.location}
                        onChange={handleClaimsFormChange("location")}
                        required
                        variant="outlined"
                        placeholder="e.g., 123 Main Street, Victoria Island, Lagos, Nigeria"
                        sx={{
                          minWidth: { xs: 250, md: 500 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        select
                        label="Nature of Loss"
                        value={claimsForm.natureOfLoss}
                        onChange={handleClaimsFormChange("natureOfLoss")}
                        required
                        variant="outlined"
                        sx={{
                          minWidth: { xs: 250, md: 500 },
                        }}
                      >
                        {natureOfLossOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Narration of Event"
                        value={claimsForm.narration}
                        onChange={handleClaimsFormChange("narration")}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        placeholder="Please provide a detailed description of what happened, including the time, circumstances leading to the loss, and any relevant details..."
                        sx={{
                          minWidth: {
                            xs: 250,
                            sm: 550,
                            xl: 600,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Submit Section */}
                <Box
                  sx={{
                    textAlign: "center",
                    pt: 3,
                    borderTop: "1px solid rgba(0, 51, 102, 0.1)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(0,0,0,0.6)",
                      mb: 3,
                      fontStyle: "italic",
                    }}
                  >
                    By submitting this form, you confirm that all information
                    provided is accurate and complete.
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      background:
                        "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                      color: "#fff",
                      px: 8,
                      py: 2,
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      boxShadow: "0 8px 24px rgba(0, 51, 102, 0.3)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #004a99 0%, #0066cc 100%)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 32px rgba(0, 51, 102, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Submit Claim Request
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Box>
      </LocalizationProvider>

      {/* Contact / CTA Section */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 2, md: 4 },
          px: { xs: 1, md: 2 },
          borderRadius: 4,
          background: "linear-gradient(135deg, #0b58b9 0%, #003366 100%)",
          color: "#fff",
          animation: `${fadeIn} 1.1s ease-in-out`,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800 }}>
          Ready to protect what matters?
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
          Get a personalized quote in minutes. No obligation.
        </Typography>
        <Button
          variant="contained"
          startIcon={<ContactMailIcon />}
          sx={{
            backgroundColor: "#ffffff",
            color: "#003366",
            px: 4,
            py: 1.2,
            fontSize: "0.95rem",
            borderRadius: 2,
            textTransform: "none",
            transition: "all 0.25s ease",
            "&:hover": { backgroundColor: "#f1f6ff" },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}
