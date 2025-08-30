import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
} from "@mui/material";
import { keyframes } from "@mui/system";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import HandshakeIcon from "@mui/icons-material/Handshake";
import StarIcon from "@mui/icons-material/Star";
import ShieldIcon from "@mui/icons-material/Shield";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function AboutUs() {
  const whyChooseUs = [
    {
      icon: <StarIcon sx={{ fontSize: 40, color: "#003366" }} />,
      title: "Expertise",
      description:
        "Our team comprises seasoned insurance professionals with extensive industry experience.",
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: "#003366" }} />,
      title: "Personalised Service",
      description:
        "We focus on understanding each client's unique needs and designing solutions that fit.",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#003366" }} />,
      title: "Commitment to Excellence",
      description:
        "We consistently strive to exceed expectations in service delivery and client satisfaction.",
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 40, color: "#003366" }} />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in every aspect of our operations.",
    },
  ];

  const insuranceServices = [
    {
      category: "Life Insurance",
      services: ["Whole Life", "Term Life", "Group Life"],
    },
    {
      category: "General Insurance",
      services: [
        "Fire & Special Risks",
        "Motor",
        "Marine Cargo/Hull",
        "Aviation & Oil & Gas",
        "Engineering All Risks",
        "Erection All Risks",
        "Burglary",
        "Householders",
        "Goods-In-Transit",
        "Fidelity Guarantee",
        "Group Personal Accident",
      ],
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 10, px: { xs: 2, md: 4 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 10,
          p: { xs: 6, md: 8 },
          borderRadius: 6,
          background: "linear-gradient(135deg, #f7fbff 0%, #eaf3ff 100%)",
          border: "1px solid #e6eef8",
          animation: `${fadeIn} 0.7s ease-in-out`,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23003366" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.6,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Chip
            label="About Us"
            color="primary"
            variant="outlined"
            sx={{
              mb: 4,
              borderColor: "#003366",
              color: "#003366",
              fontWeight: 700,
              fontSize: "1.1rem",
              py: 1.5,
              px: 3,
              borderRadius: 3,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              color: "#003366",
              fontWeight: 800,
              lineHeight: 1.15,
              mb: 4,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            TITPAK Insurance Brokers Limited
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(0,0,0,0.72)",
              mb: 3,
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.4rem" },
            }}
          >
            Excellence, Trust, and Innovation in Insurance
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.6)",
              maxWidth: 800,
              mx: "auto",
              fontSize: "1.2rem",
              lineHeight: 1.7,
            }}
          >
            A licensed insurance brokerage committed to delivering excellence,
            trust, and innovation in the Nigerian insurance industry.
          </Typography>
        </Box>
      </Box>

      {/* Company Overview */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: { xs: 4, md: 0 } }}>
              <Typography
                variant="h3"
                sx={{
                  color: "#003366",
                  mb: 3,
                  fontWeight: 800,
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.7)",
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                Since our establishment, we have built a reputation for
                professionalism, quality service, and customer-focused
                solutions. Our mission is straightforward: to offer individuals,
                businesses, and institutions customised insurance products that
                safeguard their assets, secure their future, and provide them
                with peace of mind.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.7)",
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                Whether you are an individual, a family, or a corporate
                organisation, we are here to safeguard what matters most to you.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                color: "white",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                }}
              />
              <BusinessIcon
                sx={{ fontSize: 80, mb: 3, position: "relative" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2, position: "relative" }}
              >
                Licensed Insurance Brokerage
              </Typography>
              <Typography
                variant="body1"
                sx={{ opacity: 0.9, position: "relative" }}
              >
                Regulated and authorized by the National Insurance Commission
                (NAICOM) to provide insurance brokerage services in Nigeria.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Insurance Services */}
      <Box sx={{ mb: 10 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#003366",
              mb: 3,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Our Insurance Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)",
              maxWidth: 700,
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            We offer a comprehensive range of Life and Non-Life Insurance
            solutions designed to protect what matters most
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {insuranceServices.map((category, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ width: "100%" }}>
                <Card
                  elevation={0}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
                    border: "1px solid #e1e8f0",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background:
                        "linear-gradient(90deg, #003366 0%, #004a99 100%)",
                      transform: "scaleX(0)",
                      transition: "transform 0.4s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0, 51, 102, 0.15)",
                      borderColor: "#003366",
                      "&::before": {
                        transform: "scaleX(1)",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 4 }, width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 3,
                        backgroundColor: "rgba(0, 51, 102, 0.05)",
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          p: { xs: 1.5, md: 2 },
                          borderRadius: 3,
                          backgroundColor: "#003366",
                          color: "white",
                          mr: { xs: 2, md: 3 },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <SecurityIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#003366",
                          fontWeight: 700,
                          fontSize: { xs: "1.1rem", md: "1.4rem" },
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        {category.category}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 1, md: 1.5 },
                      }}
                    >
                      {category.services.map((service, idx) => (
                        <Chip
                          key={idx}
                          label={service}
                          variant="outlined"
                          sx={{
                            borderColor: "#003366",
                            color: "#003366",
                            fontWeight: 600,
                            borderRadius: 2,
                            px: { xs: 1.5, md: 2 },
                            py: { xs: 0.5, md: 1 },
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#003366",
                              color: "white",
                              transform: "scale(1.05)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#003366",
              mb: 2,
              fontWeight: 800,
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            We stand out through our commitment to excellence and customer
            satisfaction
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {whyChooseUs.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{ width: "100%" }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
                    border: "1px solid #e1e8f0",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background:
                        "linear-gradient(90deg, #003366 0%, #004a99 100%)",
                      transform: "scaleX(0)",
                      transition: "transform 0.4s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0, 51, 102, 0.15)",
                      borderColor: "#003366",
                      "&::before": {
                        transform: "scaleX(1)",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 4 }, width: "100%" }}>
                    <Box
                      sx={{
                        mb: { xs: 2, md: 4 },
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          p: { xs: 2, md: 3 },
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: { xs: 60, md: 80 },
                          height: { xs: 60, md: 80 },
                          boxShadow: "0 8px 25px rgba(0, 51, 102, 0.2)",
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          sx: { fontSize: { xs: 28, md: 36 } },
                        })}
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#003366",
                        fontWeight: 700,
                        mb: 3,
                        fontSize: "1.2rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(0,0,0,0.7)",
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
