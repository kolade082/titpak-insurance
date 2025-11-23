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
import aviation1 from "../assets/service-images/aviation/1.webp";
import marine1 from "../assets/service-images/marine/1.jpg";
import motor1 from "../assets/service-images/motor/1.webp";
import fire2 from "../assets/service-images/fire/2.jpg";
import lifeWhole from "../assets/service-images/life/whole-life.png";
import engineering1 from "../assets/service-images/engineering/1.jpg";

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
    {
      title: "Aviation Insurance",
      description: "Comprehensive coverage for aircraft, airlines, and aviation-related risks.",
      link: "/what-we-do/aviation",
      icon: "✈️",
      image: aviation1
    },
    {
      title: "Marine Hull & Cargo",
      description: "Protection for vessels, cargo, and marine transportation risks.",
      link: "/what-we-do/marine-hull-cargo",
      icon: "🚢",
      image: marine1
    },
    {
      title: "Motor Insurance",
      description: "Third party, fire & theft, and comprehensive vehicle coverage.",
      link: "/what-we-do/motor",
      icon: "🚗",
      image: motor1
    },
    {
      title: "Fire Insurance",
      description: "Protection against fire, lightning, and special perils for property.",
      link: "/what-we-do/fire",
      icon: "🔥",
      image: fire2
    },
    {
      title: "Life Insurance",
      description: "Whole life, term life, and group life insurance solutions.",
      link: "/what-we-do/life-insurance/whole-life",
      icon: "🛡️",
      image: lifeWhole
    },
    {
      title: "Engineering Insurance",
      description: "Construction All Risks (CAR), Erection All Risks (EAR), and Plant All Risks (PAR).",
      link: "/what-we-do/engineering-all-risks",
      icon: "🏗️",
      image: engineering1
    },
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
              to="/get-quote"
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
        {services.map((service, idx) => (
          <Box
            key={idx}
            sx={{
              border: "1px solid #e6eef8",
              borderRadius: 3,
              overflow: "hidden",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f8fbff",
                borderColor: "#d7e6fa",
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* Service Image */}
            <Box
              sx={{
                height: 200,
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(135deg, rgba(0,51,102,0.1) 0%, rgba(0,51,102,0.3) 100%)",
                }
              }}
            >
              {/* Service Icon Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: "50%",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ 
                    fontSize: "1.5rem",
                    lineHeight: 1,
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                  }}
                >
                  {service.icon}
                </Typography>
              </Box>
            </Box>
            
            {/* Service Content */}
            <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 1.5, flexGrow: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ color: "#003366", fontWeight: 700, fontSize: "1.1rem" }}
              >
                {service.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: "rgba(0,0,0,0.7)", 
                  lineHeight: 1.5,
                  flexGrow: 1
                }}
              >
                {service.description}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Button
                  component={Link}
                  to={service.link}
                  size="small"
                  variant="text"
                  sx={{ 
                    textTransform: "none", 
                    px: 0, 
                    color: "#004a99",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#003366",
                      textDecoration: "underline"
                    }
                  }}
                >
                  Learn more →
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
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
