import React, { useState } from "react";
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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { keyframes } from "@mui/system";
import ClaimFormSection from "../components/ClaimFormSection";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Claims() {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewAllRequirements = (insurance) => {
    setSelectedInsurance(insurance);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedInsurance(null);
  };

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
            Documents Required by Insurance Type
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)', 
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Click on your insurance type to see the specific documents required for your claim
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
              title: "Fire Insurance",
              description: "Property damage from fire and special perils",
              icon: "🔥",
              requirements: [
                "Completed claim form",
                "Photographs taken at the scene",
                "Fire brigade report",
                "Police report",
                "Estimate",
                "Internal Statement by eyewitness / Incident report",
                "Valuation report of the building",
                "Damage to itemized parts/equipment",
                "And any other relevant claim documents"
              ]
            },
            {
              title: "Burglary Insurance",
              description: "Theft and break-in protection",
              icon: "🔒",
              requirements: [
                "Completed claim form",
                "Estimate of repairs",
                "Photographs: to show the extent of the incident",
                "Police report",
                "List of damage items",
                "Statement of loss or incident report",
                "And any other supporting claim document"
              ]
            },
            {
              title: "Group Personal Accident",
              description: "Workplace injury coverage",
              icon: "🏥",
              requirements: [
                "Completed claim form",
                "Photographs of the injured staff",
                "Medical report",
                "Itemised medical bill",
                "Evidence of the itemized medical bill",
                "ID Card",
                "Excuse the duty certificate showing the days of the incapacity period",
                "Three months' pay slips",
                "Incident report",
                "And any other supporting claim documents"
              ]
            },
            {
              title: "Householder Comprehensive",
              description: "Complete home protection",
              icon: "🏠",
              requirements: [
                "Completed claim form",
                "Estimate of repairs",
                "Photographs: to show the extent of the incident",
                "Police report",
                "List of damage items",
                "Statement of loss or incident report",
                "And any other supporting claim documents"
              ]
            },
            {
              title: "Goods in Transit",
              description: "Protection during transportation",
              icon: "📦",
              requirements: [
                "Completed claim form",
                "Invoice",
                "Delivery waybill",
                "Debit Note",
                "Particulars of the vehicle (e.g. vehicle license, proof of ownership, Roadworthiness and others)",
                "Agreement between the insured and the hire vehicle company (if it is any hire vehicle)",
                "Photographs",
                "Police report",
                "List of damage items",
                "Statement of loss or incident report",
                "And any other supporting claim documents"
              ]
            },
            {
              title: "Fidelity Guarantee",
              description: "Employee dishonesty protection",
              icon: "🛡️",
              requirements: [
                "Completed claim form",
                "Statement of loss / Incident report",
                "List of damage items",
                "Guarantor form",
                "Employment letter",
                "Confirmation of appointment",
                "Querry letter",
                "Reply letter to the query",
                "Defaulter's Benefit",
                "Persecution letter",
                "Police report",
                "And any other supporting claim documents"
              ]
            },
            {
              title: "Plant All Risk / Machinery Breakdown",
              description: "Equipment and machinery protection",
              icon: "⚙️",
              requirements: [
                "Completed claim form",
                "Estimate of repairs",
                "Incident report",
                "Photographs (if any)",
                "List of damage items",
                "Statement of loss or incident report",
                "And any other supporting claim documents"
              ]
            },
            {
              title: "Boiler & Pressure Vessel",
              description: "Industrial equipment protection",
              icon: "🔧",
              requirements: [
                "Completed claim form",
                "Estimate of repairs",
                "Incident report",
                "Photographs",
                "List of damage items",
                "Statement of loss or incident report",
                "And any other supporting claim documents"
              ]
            }
          ].map((insurance, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6}
              lg={4}
              key={index}
              sx={{ 
                display: 'flex',
                minHeight: { xs: 'auto', sm: '300px', md: '350px' }
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
                    
                    <Box sx={{ textAlign: 'left', mb: 3 }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#003366',
                          fontWeight: 600,
                          mb: 1.5,
                          fontSize: '0.9rem'
                        }}
                      >
                        Required Documents:
                      </Typography>
                      {insurance.requirements.slice(0, 3).map((req, reqIndex) => (
                        <Typography 
                          key={reqIndex}
                          variant="body2" 
                          sx={{ 
                            color: 'rgba(0,0,0,0.6)',
                            fontSize: '0.8rem',
                            mb: 0.5,
                            display: 'flex',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Box component="span" sx={{ mr: 1, mt: 0.2 }}>•</Box>
                          {req}
                        </Typography>
                      ))}
                      {insurance.requirements.length > 3 && (
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#1976d2',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            fontStyle: 'italic'
                          }}
                        >
                          +{insurance.requirements.length - 3} more documents...
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  
                  <Button
                    variant="outlined"
                    onClick={() => handleViewAllRequirements(insurance)}
                    sx={{
                      borderColor: '#003366',
                      color: '#003366',
                      fontWeight: 600,
                      py: 1,
                      px: 2,
                      borderRadius: 2,
                      fontSize: '0.9rem',
                      '&:hover': {
                        borderColor: '#004a99',
                        backgroundColor: 'rgba(0, 51, 102, 0.04)'
                      }
                    }}
                  >
                    View All Requirements
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Claims Form */}
      <ClaimFormSection />

      {/* Requirements Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: '80vh'
          }
        }}
      >
        <DialogTitle sx={{ 
          backgroundColor: '#003366', 
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h4" sx={{ fontSize: '2rem' }}>
              {selectedInsurance?.icon}
            </Typography>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                {selectedInsurance?.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Required Documents
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={handleCloseModal}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ p: 4 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)', 
              mb: 3,
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            {selectedInsurance?.description}
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#003366', 
              fontWeight: 700, 
              mb: 2,
              fontSize: '1.2rem'
            }}
          >
            Complete List of Required Documents:
          </Typography>
          
          <List sx={{ bgcolor: '#f8f9fa', borderRadius: 2, p: 2 }}>
            {selectedInsurance?.requirements.map((requirement, index) => (
              <ListItem key={index} sx={{ py: 1, px: 0 }}>
                <ListItemText
                  primary={
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        color: '#333'
                      }}
                    >
                      {requirement}
                    </Typography>
                  }
                  sx={{
                    '& .MuiListItemText-primary': {
                      display: 'flex',
                      alignItems: 'flex-start'
                    }
                  }}
                />
                <Box 
                  component="span" 
                  sx={{ 
                    color: '#003366',
                    fontWeight: 'bold',
                    mr: 2,
                    mt: 0.2,
                    fontSize: '1.2rem'
                  }}
                >
                  •
                </Box>
              </ListItem>
            ))}
          </List>
          
          <Box sx={{ 
            mt: 3, 
            p: 2, 
            backgroundColor: '#e3f2fd', 
            borderRadius: 2,
            border: '1px solid #bbdefb'
          }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#1976d2',
                fontWeight: 600,
                fontStyle: 'italic'
              }}
            >
              💡 Tip: Make sure to gather all these documents before submitting your claim to avoid delays in processing.
            </Typography>
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            sx={{
              backgroundColor: '#003366',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#004a99'
              }
            }}
          >
            Got It
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}
