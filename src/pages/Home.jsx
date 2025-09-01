import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  Chip,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { keyframes } from "@mui/system";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShieldIcon from "@mui/icons-material/Shield";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";

import ClaimFormSection from "../components/ClaimFormSection";
import FAQSection from "../components/FAQSection";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Home() {
  // Claims form state

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
              component={Link}
              to="/titpak-insurance/get-quote"
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
              Let's get you covered now
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
        <Chip label="Some FAQs" sx={{ color: "#003366" }} />
      </Divider>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Claims Form Section */}
      <ClaimFormSection />
    </Container>
  );
}
