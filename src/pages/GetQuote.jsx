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
  Button,
  Divider,
} from "@mui/material";
import { keyframes } from "@mui/system";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function GetQuote() {
  const insuranceTypes = [
    {
      title: "Motor Insurance",
      description: "Comprehensive coverage for cars, motorcycles, and commercial vehicles. Protect your vehicle against accidents, theft, and third-party liability.",
      features: ["Accident Coverage", "Theft Protection", "Third Party Liability", "Comprehensive Options"],
      icon: "🚗",
      fileName: "quote-for-motor.docx",
      category: "Vehicle"
    },
    {
      title: "Goods in Transit",
      description: "Protect your goods while they're being transported. Essential coverage for logistics companies and businesses that ship valuable items.",
      features: ["Transit Coverage", "Loading/Unloading", "Multiple Transport Modes", "Customizable Limits"],
      icon: "📦",
      fileName: "quote-for-good-in-transit.docx",
      category: "Business"
    },
    {
      title: "Fire & Special Perils",
      description: "Comprehensive property protection against fire, natural disasters, and other specified perils. Ideal for buildings and business premises.",
      features: ["Fire Damage", "Natural Disasters", "Explosion Coverage", "Property Protection"],
      icon: "🔥",
      fileName: "quote-for-fire:special-perils.docx",
      category: "Property"
    },
    {
      title: "Fidelity Insurance",
      description: "Protect your business against employee dishonesty, fraud, and financial losses. Essential for companies handling money or valuable assets.",
      features: ["Employee Dishonesty", "Fraud Protection", "Financial Loss Coverage", "Business Protection"],
      icon: "🛡️",
      fileName: "quote-for-fidelity-insurance.docx",
      category: "Business"
    },
    {
      title: "Burglary Insurance",
      description: "Comprehensive protection against theft, burglary, and break-ins. Covers both residential and commercial properties.",
      features: ["Theft Protection", "Break-in Coverage", "Property Damage", "Contents Protection"],
      icon: "🔒",
      fileName: "quote-for-burgulary.docx",
      category: "Property"
    }
  ];

  const handleDownload = (fileName) => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = `./assets/get_quote/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          label="Get Quote" 
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
          Get Your Insurance Quote
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'rgba(0,0,0,0.72)', 
            mb: 2,
            fontWeight: 500
          }}
        >
          Choose the right coverage for your needs
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
          Download the appropriate quote form, fill it out, and email it to us for a personalized quote.
        </Typography>
      </Box>

      {/* How It Works */}
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
            How to Get Your Quote
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)', 
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Simple 3-step process to get your personalized insurance quote
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
              step: "1",
              title: "Download Form",
              description: "Choose your insurance type and download the corresponding quote form",
              icon: <DownloadIcon sx={{ fontSize: 40, color: '#4caf50' }} />
            },
            {
              step: "2",
              title: "Fill & Complete",
              description: "Fill out the form with your details and requirements",
              icon: <DescriptionIcon sx={{ fontSize: 40, color: '#2196f3' }} />
            },
            {
              step: "3",
              title: "Email & Get Quote",
              description: "Email the completed form to titpakinsbrokersltd@gmail.com",
              icon: <EmailIcon sx={{ fontSize: 40, color: '#ff9800' }} />
            }
          ].map((step, index) => (
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

      {/* Insurance Types */}
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
            Choose Your Insurance Type
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)', 
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Select the coverage that best fits your needs and download the corresponding quote form
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
          {insuranceTypes.map((insurance, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6}
              lg={4}
              key={index}
              sx={{ 
                display: 'flex',
                minHeight: { xs: 'auto', sm: '400px', md: '450px' }
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
                      <Typography 
                        variant="h1" 
                        sx={{ 
                          fontSize: { xs: '3rem', md: '4rem' },
                          lineHeight: 1
                        }}
                      >
                        {insurance.icon}
                      </Typography>
                    </Box>
                    
                    <Chip 
                      label={insurance.category} 
                      size="small"
                      sx={{ 
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        mb: 2
                      }} 
                    />
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#003366', 
                        fontWeight: 700,
                        mb: { xs: 1.5, md: 2 },
                        fontSize: { xs: '1.2rem', md: '1.4rem' }
                      }}
                    >
                      {insurance.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(0,0,0,0.7)',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        mb: 3
                      }}
                    >
                      {insurance.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {insurance.features.map((feature, featureIndex) => (
                        <Typography 
                          key={featureIndex}
                          variant="body2" 
                          sx={{ 
                            color: 'rgba(0,0,0,0.6)',
                            fontSize: '0.85rem',
                            mb: 0.5
                          }}
                        >
                          • {feature}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    onClick={() => handleDownload(insurance.fileName)}
                    sx={{
                      backgroundColor: '#003366',
                      color: 'white',
                      fontWeight: 600,
                      py: 1.5,
                      px: 3,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#004a99'
                      }
                    }}
                  >
                    Download Form
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Email Instructions */}
      <Box sx={{ mb: 8, width: '100%' }}>
        <Paper elevation={0} sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, #fff8e1 0%, #fff3e0 100%)',
          border: '1px solid #ffe0b2',
          textAlign: 'center'
        }}>
          <EmailIcon sx={{ fontSize: 60, color: '#ff9800', mb: 3 }} />
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#e65100', 
              fontWeight: 700,
              mb: 2
            }}
          >
            Ready to Get Your Quote?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              mb: 3
            }}
          >
            After downloading and filling out your chosen quote form, email it to us at:
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#003366',
              fontWeight: 700,
              mb: 3,
              fontFamily: 'monospace',
              backgroundColor: 'rgba(255,255,255,0.7)',
              py: 1,
              px: 3,
              borderRadius: 2,
              display: 'inline-block',
              wordBreak: 'break-all',
              maxWidth: '100%',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              textAlign: 'center'
            }}
          >
            titpakinsbrokersltd@gmail.com
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)',
              fontSize: '1rem'
            }}
          >
            We'll review your requirements and get back to you with a personalized quote within 24-48 hours.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
