import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Avatar,
  MenuItem,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const ClaimFormSection = () => {
  const [claimsForm, setClaimsForm] = useState({
    policyNumber: "",
    dateOfLoss: null,
    email: "",
    phone: "",
    location: "",
    natureOfLoss: "",
    narration: "",
  });

  const handleClaimsFormChange = (field) => (event) => {
    setClaimsForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setClaimsForm((prev) => ({
      ...prev,
      dateOfLoss: date,
    }));
  };

  const handleClaimsSubmit = (event) => {
    event.preventDefault();
    console.log("Claims form submitted:", claimsForm);
    // Here you would typically send the data to your backend
    alert("Claim submitted successfully! We will contact you shortly.");
  };

  const natureOfLossOptions = [
    "Fire",
    "Theft",
    "Accident",
    "Natural Disaster",
    "Water Damage",
    "Vandalism",
    "Other",
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          mx: "auto",
          mb: 12,
          px: { xs: 2, md: 3 },
          maxWidth: 1200,
        }}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6, position: "relative" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Avatar
              sx={{
                bgcolor: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
                width: 64,
                height: 64,
                mr: 2,
                boxShadow: "0 8px 24px rgba(255, 107, 53, 0.3)",
              }}
            >
              <ReportProblemIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#003366",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 0.5,
                }}
              >
                File a Claim
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(0,0,0,0.6)", fontSize: "1.1rem" }}
              >
                Quick & secure claim submission
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)",
              maxWidth: 600,
              mx: "auto",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            Report your loss quickly and easily. Our experienced claims team
            will guide you through every step of the process and ensure fair,
            fast resolution.
          </Typography>
        </Box>

        {/* Form Container */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
            border: "1px solid rgba(0, 51, 102, 0.08)",
            boxShadow: "0 20px 60px rgba(0, 51, 102, 0.08)",
          }}
        >
          {/* Form Header */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #003366 0%, #004a99 100%)",
              color: "white",
              p: { xs: 3, md: 4 },
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Claim Information Form
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.9, fontSize: "0.95rem" }}
            >
              Please fill in all required fields to process your claim
              efficiently
            </Typography>
          </Box>

          {/* Form Content */}
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <form onSubmit={handleClaimsSubmit}>
              {/* Personal Information */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#003366",
                    fontWeight: 700,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 24,
                      bgcolor: "#003366",
                      mr: 2,
                      borderRadius: 2,
                    }}
                  />
                  Policy & Contact Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Policy Number"
                      value={claimsForm.policyNumber}
                      onChange={handleClaimsFormChange("policyNumber")}
                      required
                      variant="outlined"
                      placeholder="e.g., POL-2024-001234"
                      sx={{ minWidth: { xs: 250, md: 500 } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DatePicker
                      label="Date of Loss"
                      value={claimsForm.dateOfLoss}
                      onChange={handleDateChange}
                      maxDate={new Date()}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          required: true,
                          variant: "outlined",
                          sx: { minWidth: { xs: 250, md: 500 } },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={claimsForm.email}
                      onChange={handleClaimsFormChange("email")}
                      required
                      variant="outlined"
                      placeholder="your.email@example.com"
                      sx={{ minWidth: { xs: 250, md: 500 } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      value={claimsForm.phone}
                      onChange={handleClaimsFormChange("phone")}
                      required
                      variant="outlined"
                      placeholder="+234 xxx xxx xxxx"
                      sx={{ minWidth: { xs: 250, md: 500 } }}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Loss Details */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#003366",
                    fontWeight: 700,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 24,
                      bgcolor: "#003366",
                      mr: 2,
                      borderRadius: 2,
                    }}
                  />
                  Loss Details
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Location of Loss"
                      value={claimsForm.location}
                      onChange={handleClaimsFormChange("location")}
                      required
                      variant="outlined"
                      placeholder="e.g., 123 Main Street, Lagos"
                      sx={{ minWidth: { xs: 250, md: 500 } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      select
                      label="Nature of Loss"
                      value={claimsForm.natureOfLoss}
                      onChange={handleClaimsFormChange("natureOfLoss")}
                      required
                      variant="outlined"
                      sx={{ minWidth: { xs: 250, md: 500 } }}
                    >
                      {natureOfLossOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Narration of Event"
                      value={claimsForm.narration}
                      onChange={handleClaimsFormChange("narration")}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                      placeholder="Please provide a detailed description..."
                      sx={{ minWidth: { xs: 250, sm: 500, md: 650 } }}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Submit */}
              <Box
                sx={{
                  textAlign: "center",
                  pt: 3,
                  borderTop: "1px solid rgba(0, 51, 102, 0.1)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(0,0,0,0.6)", mb: 3, fontStyle: "italic" }}
                >
                  By submitting this form, you confirm that all information
                  provided is accurate and complete.
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, #003366 0%, #004a99 100%)",
                    color: "#fff",
                    px: 8,
                    py: 2,
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    boxShadow: "0 8px 24px rgba(0, 51, 102, 0.3)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #004a99 0%, #0066cc 100%)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 32px rgba(0, 51, 102, 0.4)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Submit Claim Request
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
};

export default ClaimFormSection;
