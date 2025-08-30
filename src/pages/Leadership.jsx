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
  Avatar,
} from "@mui/material";
import { keyframes } from "@mui/system";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Leadership() {
  const careerTimeline = [
    {
      year: "1986",
      title: "Industrial Attachment",
      company: "National Insurance Corporation",
      role: "Actuarial Services Department",
      icon: <SchoolIcon />,
    },
    {
      year: "1986-1995",
      title: "Banking & Financial Operations",
      company: "United Bank for Africa & Merril Guaranty Savings & Loans",
      role: "Assistant Branch Manager",
      icon: <WorkIcon />,
    },
    {
      year: "1995-2000",
      title: "Reinsurance Superintendent",
      company: "Lombard Insurance Company Ltd",
      role: "Managing NPA risks, underwriting, claims, and reinsurance",
      icon: <BusinessIcon />,
    },
    {
      year: "2000-2001",
      title: "Sales, Underwriting & Claims",
      company: "Senforce Insurance Brokers",
      role: "Broadening expertise in insurance brokerage",
      icon: <WorkIcon />,
    },
    {
      year: "2001-2015",
      title: "Manager & Head of Technical Operations",
      company: "Guardian Trust Insurance Company Ltd (now KBL Insurance Ltd)",
      role: "Supervising underwriting, claims, reinsurance, treaty negotiations",
      icon: <TrendingUpIcon />,
    },
    {
      year: "2015-2022",
      title: "Key Account Manager",
      company: "Zep-Re (PTA Reinsurance Company)",
      role: "Anglophone West Africa, marketing, statistical analysis, retrocession",
      icon: <BusinessIcon />,
    },
    {
      year: "2022-2023",
      title: "General Manager",
      company: "Indoarab Insurance Brokers Limited",
      role: "Supervising underwriting, claims, and reinsurance operations",
      icon: <WorkIcon />,
    },
    {
      year: "2023-Present",
      title: "Managing Director/CEO",
      company: "Titpak Insurance Brokers Ltd",
      role: "Strategic growth and business development",
      icon: <StarIcon />,
    },
  ];

  const professionalAchievements = [
    "Over three decades of experience in insurance, reinsurance, and financial services",
    "Expertise in underwriting, claims, reinsurance, and insurance brokerage",
    "Experience with both local and international institutions",
    "Key role in treaty renewal negotiations with Swiss Reinsurance Company, Zurich",
    "Regional responsibility for Anglophone West Africa (Gambia, Liberia, Ghana, Nigeria, Sierra Leone)",
    "Attended numerous professional courses, conferences and seminars",
    "Active participation in AIO (African Insurance Organisation)",
    "Involvement in WAICA Reinsurance (West Africa Insurance Council Association)",
    "Specialized knowledge in Energy, Oil & Gas, and Aviation risks",
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
            label="Leadership"
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
            Meet Our Leadership
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
            Experienced professionals driving innovation and growth
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
            Our leadership team brings decades of industry experience and a
            commitment to excellence in serving our clients.
          </Typography>
        </Box>
      </Box>

      {/* MD/CEO Profile */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #e6eef8",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                position: "sticky",
                top: 100,
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                  color: "white",
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 3,
                    bgcolor: "rgba(255,255,255,0.2)",
                    fontSize: "3rem",
                    fontWeight: "bold",
                  }}
                >
                  BA
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Mr. Bamidele Basil Akinsika
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Managing Director/Chief Executive Officer
                </Typography>
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                    <LocationOnIcon
                      sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }}
                    />
                    Nigeria
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                    <WorkIcon
                      sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }}
                    />
                    Insurance & Reinsurance
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    <TrendingUpIcon
                      sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }}
                    />
                    30+ Years Experience
                  </Typography>
                </Box>
                <Chip
                  label="Current Role"
                  color="primary"
                  sx={{ fontWeight: 600 }}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  color: "#003366",
                  mb: 3,
                  fontWeight: 800,
                }}
              >
                Leadership Profile
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
                Mr. B.B. Akinsika leads the company's strategic growth and
                business development. He also currently serves as a Consultant
                to Great Nigeria Insurance Plc on Reinsurance Portfolio
                Management.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.7)",
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                With over three decades of experience spanning insurance,
                reinsurance, and financial services, he has built a
                distinguished career in underwriting, claims, reinsurance, and
                insurance brokerage, working for both local and international
                institutions.
              </Typography>
            </Box>

            {/* Professional Achievements */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#003366",
                  mb: 3,
                  fontWeight: 700,
                }}
              >
                Professional Achievements
              </Typography>
              <Grid container spacing={2}>
                {professionalAchievements.map((achievement, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                    >
                      <StarIcon
                        sx={{ color: "#003366", mr: 2, mt: 0.5, fontSize: 20 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}
                      >
                        {achievement}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Career Timeline */}
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
            Career Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            A comprehensive overview of Mr. Akinsika's distinguished career path
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {careerTimeline.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
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
                  <CardContent
                    sx={{
                      p: { xs: 2, md: 4 },
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 60, md: 70 },
                        height: { xs: 60, md: 70 },
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: { xs: 3, md: 4 },
                        boxShadow: "0 8px 25px rgba(0, 51, 102, 0.2)",
                        position: "relative",
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        sx: { fontSize: { xs: 28, md: 32 } },
                      })}
                    </Box>
                    <Chip
                      label={item.year}
                      color="primary"
                      size="medium"
                      sx={{
                        fontWeight: 600,
                        mb: { xs: 3, md: 4 },
                        px: { xs: 2, md: 3 },
                        py: 1,
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                        background:
                          "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                        color: "white",
                        boxShadow: "0 4px 15px rgba(0, 51, 102, 0.2)",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#003366",
                        fontWeight: 700,
                        mb: { xs: 2, md: 3 },
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#004a99",
                        fontWeight: 600,
                        mb: { xs: 2, md: 3 },
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {item.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(0,0,0,0.7)",
                        lineHeight: 1.7,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                      }}
                    >
                      {item.role}
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
