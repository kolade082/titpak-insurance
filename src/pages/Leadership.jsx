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
// MUI Lab Timeline components
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { keyframes } from "@mui/system";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import baImage from "../assets/BA.JPEG";


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
        <Grid
          container
          spacing={4}
          sx={{
            width: "100%",
            margin: 0,
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {/* LEFT SIDE */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              minWidth: { md: "40%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              elevation={2}
              sx={{
                width: "100%",
                maxWidth: 420,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                  textAlign: "center",
                  p: 4,
                  color: "white",
                }}
              >
                <Avatar
                  src={baImage}
                  sx={{
                    width: 200,
                    height: 200,
                    mx: "auto",
                    mb: 2,
                  }}
                />
              </Box>

              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Mr. Bamidele Basil Akinsika
                </Typography>
                <Typography sx={{ opacity: 0.9, mb: 1 }}>
                  Managing Director/Chief Executive Officer
                </Typography>

                <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  Nigeria
                </Typography>

                <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <WorkIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  Insurance & Reinsurance
                </Typography>

                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  30+ Years Experience
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              minWidth: { md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              px: { xs: 0, md: 4 },
            }}
          >

            <Typography
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                opacity: 0.9,
                mb: 3,
                textAlign: "center",
              }}
            >
              Mr. B.B. Akinsika leads the company's strategic growth and business development. He also currently serves as a Consultant to Great Nigeria Insurance Plc on Reinsurance Portfolio Management.
            </Typography>

            <Typography
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                opacity: 0.9,
                textAlign: "center",
              }}
            >
              With over three decades of experience spanning insurance, reinsurance, and financial services, he has built a distinguished career in underwriting, claims, reinsurance, and insurance brokerage, working for both local and international institutions.
            </Typography>
          </Grid>
        </Grid>


        {/* Professional Achievements */}
        <Box sx={{ mb: 6, mt: 6 }}>
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
      </Box>

      {/* Career Timeline (MUI Lab Timeline) */}
      <Box sx={{ mb: 10 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ color: "#003366", mb: 2, fontWeight: 800 }}>
            Career Journey
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", maxWidth: 700, mx: "auto" }}>
            A comprehensive overview of Mr. Akinsika's distinguished career path
          </Typography>
        </Box>

        <Timeline position="alternate">
          {careerTimeline
            .slice()
            .reverse()
            .map((item, index, arr) => {
              const contentOnRight = index % 2 === 0; // when true, content is on the right
              const oppositeTextAlign = contentOnRight ? { md: "left" } : { md: "right" };
              const contentTextAlign = contentOnRight ? { md: "right" } : { md: "left" };

              return (
                <TimelineItem key={item.year + "-" + item.title}>
                  <TimelineOppositeContent
                    sx={{
                      m: "auto 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: contentOnRight ? { md: "flex-end" } : { md: "flex-start" },
                      flex: { md: "0 0 16%" },
                      pr: { md: 1 },
                      textAlign: { xs: "left", ...oppositeTextAlign },
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#003366" }}>
                      {item.year}
                    </Typography>
                  </TimelineOppositeContent>

                  <TimelineSeparator sx={{ mx: { xs: 0, md: 2 } }}>
                    <TimelineDot
                      sx={{
                        bgcolor: "#003366",
                        color: "#fff",
                        width: 44,
                        height: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                      }}
                    >
                      {React.cloneElement(item.icon, { sx: { fontSize: 20 } })}
                    </TimelineDot>
                    {index !== arr.length - 1 && <TimelineConnector sx={{ bgcolor: "#e6eef8" }} />}
                  </TimelineSeparator>

                  <TimelineContent
                    sx={{
                      py: "12px",
                      px: 2,
                      flex: { md: "0 0 60%" },
                      textAlign: { xs: "left", ...contentTextAlign },
                    }}
                  >
                    <Card elevation={0} sx={{ borderRadius: 2, border: "1px solid #eef4fb", maxWidth: "100%" }}>
                      <CardContent sx={{ p: 2.5, textAlign: { xs: "left", ...contentTextAlign } }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#003366" }}>{item.title}</Typography>
                        <Typography variant="subtitle2" sx={{ color: "#004a99", fontWeight: 600 }}>{item.company}</Typography>
                        <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)", mt: 1 }}>{item.role}</Typography>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
        </Timeline>
      </Box>

    </Container>
  );
}
