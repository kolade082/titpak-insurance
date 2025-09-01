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
  Avatar,
} from "@mui/material";
import { keyframes } from "@mui/system";
import ClaimFormSection from "../components/ClaimFormSection";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Claims() {
  const claimsProcess = [
    {
      step: "1",
      title: "Report Your Loss",
      description: "Submit your claim through our online form or contact our claims team directly.",
      icon: <CheckCircleIcon sx={{ fontSize: 32, color: '#4caf50' }} />
    },
    {
      step: "2",
      title: "Documentation Review",
      description: "Our team reviews your claim and will request additional documentation if needed.",
      icon: <CheckCircleIcon sx={{ fontSize: 32, color: '#2196f3' }} />
    },
    {
      step: "3",
      title: "Investigation",
      description: "We conduct a thorough investigation to assess the extent of your loss.",
      icon: <CheckCircleIcon sx={{ fontSize: 32, color: '#ff9800' }} />
    },
    {
      step: "4",
      title: "Assessment & Settlement",
      description: "We evaluate your claim and process the settlement according to your policy terms.",
      icon: <CheckCircleIcon sx={{ fontSize: 32, color: '#9c27b0' }} />
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 10, px: { xs: 2, md: 4 } }}>
      {/* Hero Section */}
      <Box sx={{
        textAlign: 'center',
        mb: 8,
        p: { xs: 4, md: 6 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, #f7fbff 0%, #eaf3ff 100%)',
        border: '1px solid #e6eef8',
        animation: `${fadeIn} 0.7s ease-in-out`
      }}>
        <Chip 
          label="Claims" 
          color="primary" 
          variant="outlined" 
          sx={{ 
            mb: 3, 
            borderColor: '#003366', 
            color: '#003366', 
            fontWeight: 700,
            fontSize: '1rem',
            py: 1
          }} 
        />
        <Typography 
          variant="h2" 
          sx={{ 
            color: "#003366", 
            fontWeight: 800, 
            lineHeight: 1.15, 
            mb: 3,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          File Your Claim
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'rgba(0,0,0,0.72)', 
            mb: 2,
            fontWeight: 500
          }}
        >
          Quick, fair, and transparent claims processing
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'rgba(0,0,0,0.6)', 
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}
        >
          Get started with your claim today.
        </Typography>
      </Box>

      {/* Claims Process */}
      <Box sx={{ mb: 8, width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#003366', 
              mb: 2, 
              fontWeight: 800 
            }}
          >
            How Claims Work
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)', 
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Simple 4-step process to get your claim processed quickly
          </Typography>
        </Box>
        
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            width: '100%',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {claimsProcess.map((step, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6}
              lg={3} 
              key={index}
              sx={{ 
                display: 'flex',
                minHeight: { xs: 'auto', sm: '280px', md: '300px' }
              }}
            >
              <Card elevation={0} sx={{
                width: '100%',
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e6eef8',
                backgroundColor: '#ffffff',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { 
                  transform: 'translateY(-6px)', 
                  boxShadow: '0 16px 30px rgba(0,0,0,0.08)' 
                }
              }}>
                <CardContent sx={{ 
                  textAlign: 'center', 
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}>
                  <Box>
                    <Box sx={{ 
                      mb: { xs: 2, md: 3 },
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      {step.icon}
                    </Box>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: '#003366', 
                        fontWeight: 800,
                        mb: { xs: 1.5, md: 2 },
                        fontSize: { xs: '2.5rem', md: '3rem' }
                      }}
                    >
                      {step.step}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#003366', 
                        fontWeight: 700,
                        mb: { xs: 1.5, md: 2 },
                        fontSize: { xs: '1.1rem', md: '1.2rem' }
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(0,0,0,0.7)',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', md: '1rem' }
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* Documents Required */}
      <Box sx={{ mb: 8, width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#003366', 
              mb: 2, 
              fontWeight: 800 
            }}
          >
            Documents Required
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)', 
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Prepare these documents to speed up your claims process
          </Typography>
        </Box>
        
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            width: '100%',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {[
            {
              title: "Proof of Loss",
              description: "Photos, videos, or detailed descriptions of the damage or loss incurred",
              icon: "📸",
              category: "Essential"
            },
            {
              title: "Policy Documents",
              description: "Your insurance policy number and relevant policy documents",
              icon: "📋",
              category: "Essential"
            },
            {
              title: "Police Report",
              description: "Official police report for theft, vandalism, or accident claims",
              icon: "🚔",
              category: "If Applicable"
            },
            {
              title: "Medical Reports",
              description: "Medical certificates and bills for health-related claims",
              icon: "🏥",
              category: "If Applicable"
            },
            {
              title: "Repair Estimates",
              description: "Quotes from repair shops or contractors for property damage",
              icon: "🔧",
              category: "If Applicable"
            },
            {
              title: "Receipts & Invoices",
              description: "Original receipts for items being claimed or repair costs",
              icon: "🧾",
              category: "If Applicable"
            }
          ].map((doc, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4}
              key={index}
              sx={{ 
                display: 'flex',
                minHeight: { xs: 'auto', sm: '200px', md: '220px' }
              }}
            >
              <Card elevation={0} sx={{
                width: '100%',
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e6eef8',
                backgroundColor: '#ffffff',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { 
                  transform: 'translateY(-4px)', 
                  boxShadow: '0 12px 24px rgba(0,0,0,0.08)' 
                }
              }}>
                <CardContent sx={{ 
                  textAlign: 'center', 
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}>
                  <Box>
                    <Box sx={{ 
                      mb: { xs: 2, md: 3 },
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <Typography 
                        variant="h2" 
                        sx={{ 
                          fontSize: { xs: '2.5rem', md: '3rem' },
                          lineHeight: 1
                        }}
                      >
                        {doc.icon}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#003366', 
                        fontWeight: 700,
                        mb: { xs: 1, md: 1.5 },
                        fontSize: { xs: '1.1rem', md: '1.2rem' }
                      }}
                    >
                      {doc.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(0,0,0,0.7)',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        mb: 2
                      }}
                    >
                      {doc.description}
                    </Typography>
                    <Chip 
                      label={doc.category} 
                      size="small"
                      sx={{ 
                        backgroundColor: doc.category === 'Essential' ? '#e3f2fd' : '#fff3e0',
                        color: doc.category === 'Essential' ? '#1976d2' : '#f57c00',
                        fontWeight: 600,
                        fontSize: '0.8rem'
                      }} 
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Claims Form */}
      <ClaimFormSection />

    </Container>
  );
}
