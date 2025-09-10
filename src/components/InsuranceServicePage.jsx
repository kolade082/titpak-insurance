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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const InsuranceServicePage = ({ 
  serviceData,
  features,
  benefits,
  coverage
}) => {
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
          label={serviceData.category} 
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
          {serviceData.title}
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'rgba(0,0,0,0.72)', 
            mb: 2,
            fontWeight: 500
          }}
        >
          {serviceData.subtitle}
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
          {serviceData.description}
        </Typography>
      </Box>

      {/* Features Section */}
      {features && (
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
              Key Features
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(0,0,0,0.7)', 
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Comprehensive coverage tailored to your specific needs
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
            {features.map((feature, index) => (
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
                          {feature.icon}
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
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(0,0,0,0.7)',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Benefits Section */}
      {benefits && (
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
              Why Choose Our {serviceData.title}?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(0,0,0,0.7)', 
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Experience the advantages of working with Titpak Insurance
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
            {benefits.map((benefit, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4}
                key={index}
                sx={{ 
                  display: 'flex',
                  minHeight: { xs: 'auto', sm: '250px', md: '280px' }
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
                        <CheckCircleIcon sx={{ fontSize: 40, color: '#4caf50' }} />
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#003366', 
                          fontWeight: 700,
                          mb: { xs: 1.5, md: 2 },
                          fontSize: { xs: '1.1rem', md: '1.2rem' }
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(0,0,0,0.7)',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Coverage Section */}
      {coverage && (
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
              What's Covered
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(0,0,0,0.7)', 
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Comprehensive protection for your specific needs
            </Typography>
          </Box>
          
          <Paper elevation={0} sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            backgroundColor: '#f8f9fa',
            border: '1px solid #e6eef8'
          }}>
            <Grid container spacing={4}>
              {coverage.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <CheckCircleIcon sx={{ color: '#4caf50', mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#003366', 
                          fontWeight: 600,
                          mb: 0.5,
                          fontSize: '1.1rem'
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(0,0,0,0.7)',
                          lineHeight: 1.5
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
