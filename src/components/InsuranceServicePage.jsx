import React from "react";
import {
  Container,
  Box,
  Typography,
  Chip,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { keyframes } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const InsuranceServicePage = ({
  serviceData,
  features,
  benefits,
  coverage,
  images,
}) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 10, px: { xs: 2, md: 4 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          background:
            images && images.length > 0
              ? `linear-gradient(135deg, rgba(0,51,102,0.4) 0%, rgba(0,51,102,0.2) 100%), url(${images[0]})`
              : "linear-gradient(135deg, #f7fbff 0%, #eaf3ff 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #e6eef8",
          animation: `${fadeIn} 0.7s ease-in-out`,
        }}
      >
        <Chip
          label={serviceData.category}
          color="primary"
          variant="outlined"
          sx={{
            mb: 3,
            borderColor: "white",
            color: "white",
            backgroundColor: "rgba(255,255,255,0.2)",
            fontWeight: 700,
            fontSize: "1rem",
            py: 1,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: 800,
            lineHeight: 1.15,
            mb: 3,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {serviceData.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.9)",
            mb: 2,
            fontWeight: 500,
            textShadow: "0 1px 5px rgba(0,0,0,0.5)",
          }}
        >
          {serviceData.subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.8)",
            maxWidth: 700,
            mx: "auto",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            textShadow: "0 1px 5px rgba(0,0,0,0.5)",
          }}
        >
          {serviceData.description}
        </Typography>
      </Box>

      {/* Features Section */}
      {features && (
        <Box sx={{ mb: 8, width: "100%" }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: "#003366",
                mb: 2,
                fontWeight: 800,
              }}
            >
              Key Features
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0,0,0,0.6)",
                maxWidth: 700,
                mx: "auto",
                fontWeight: 400,
                fontSize: "1.2rem",
              }}
            >
              Comprehensive coverage tailored to your specific needs
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
              position: "relative",
            }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  p: 4,
                  borderRadius: 6,
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  border: "1px solid rgba(0,51,102,0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.02)",
                    boxShadow: "0 25px 50px rgba(0,51,102,0.15)",
                    borderColor: "#4caf50",
                    "& .feature-icon": {
                      transform: "scale(1.2) rotate(5deg)",
                    },
                    "& .feature-bg": {
                      opacity: 1,
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, rgba(0,51,102,0.05) 0%, rgba(76,175,80,0.05) 100%)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  className="feature-bg"
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    background: "linear-gradient(135deg, #4caf50, #003366)",
                    borderRadius: "50%",
                    opacity: 0.1,
                    transition: "opacity 0.4s ease",
                    zIndex: 1,
                  }}
                />

                <Box
                  sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
                >
                  <Box
                    className="feature-icon"
                    sx={{
                      mb: 3,
                      display: "flex",
                      justifyContent: "center",
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: "3rem", md: "4rem" },
                        lineHeight: 1,
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                      }}
                    >
                      {feature.icon}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#003366",
                      fontWeight: 800,
                      mb: 2,
                      fontSize: { xs: "1.3rem", md: "1.5rem" },
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(0,0,0,0.7)",
                      lineHeight: 1.7,
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Benefits Section */}
      {benefits && (
        <Box sx={{ mb: 8, width: "100%" }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: "#003366",
                mb: 2,
                fontWeight: 800,
              }}
            >
              Why Choose Our {serviceData.title}?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Experience the advantages of working with Titpak Insurance Brokers LTD
            </Typography>
          </Box>

          {/* Integrated Benefits Layout with Image */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 6,
              alignItems: "stretch",
              mb: 6,
            }}
          >
            {/* Benefits Cards */}
            <Box
              sx={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: 4,
              }}
            >
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    border: "1px solid #e6eef8",
                    backgroundColor: "#ffffff",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 20px 40px rgba(0,51,102,0.12)",
                      borderColor: "#4caf50",
                      "& .benefit-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                        color: "#4caf50",
                      },
                      "& .benefit-bg": {
                        opacity: 1,
                      },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, rgba(0,51,102,0.03) 0%, rgba(76,175,80,0.03) 100%)`,
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      zIndex: 1,
                    },
                  }}
                >
                  <Box
                    className="benefit-bg"
                    sx={{
                      position: "absolute",
                      top: -30,
                      right: -30,
                      width: 80,
                      height: 80,
                      background: "linear-gradient(135deg, #4caf50, #003366)",
                      borderRadius: "50%",
                      opacity: 0.05,
                      transition: "opacity 0.4s ease",
                      zIndex: 1,
                    }}
                  />

                  <CardContent
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        className="benefit-icon"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: "rgba(76,175,80,0.1)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            fontSize: 28,
                            color: "#4caf50",
                            transition: "all 0.4s ease",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#003366",
                          fontWeight: 700,
                          fontSize: { xs: "1.1rem", md: "1.2rem" },
                          lineHeight: 1.2,
                        }}
                      >
                        {benefit.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(0,0,0,0.7)",
                        lineHeight: 1.6,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        flexGrow: 1,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Integrated Image */}
            {images && images.length > 1 && (
              <Box
                sx={{
                  flex: { xs: "none", lg: "0 0 400px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 300, lg: 500 },
                    borderRadius: 6,
                    background: `url(${images[1]}) center/cover no-repeat`,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "scale(1.03) rotate(1deg)",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(0,51,102,0.1) 0%, rgba(76,175,80,0.1) 100%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      zIndex: 1,
                    },
                    "&:hover::before": {
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      )}

      {/* Coverage Section */}
      {coverage && (
        <Box sx={{ mb: 8, width: "100%" }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: "#003366",
                mb: 2,
                fontWeight: 800,
              }}
            >
              What's Covered
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Comprehensive protection for your specific needs
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: "#f8f9fa",
              border: "1px solid #e6eef8",
            }}
          >
            <Grid container spacing={4}>
              {coverage.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <CheckCircleIcon
                      sx={{ color: "#4caf50", mr: 2, mt: 0.5 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#003366",
                          fontWeight: 600,
                          mb: 0.5,
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(0,0,0,0.7)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      )}
    </Container>
  );
};

export default InsuranceServicePage;
