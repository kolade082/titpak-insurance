import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
  Stack,
  Paper,
  Chip,
  Container,
} from "@mui/material";
import { keyframes } from "@mui/system";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Footer() {
  return (
    <>
      {/* Call to Action Section */}
      <Container maxWidth="xl" sx={{ mt: 10, mb: 6, px: { xs: 2, md: 4 } }}>
        <Paper
          elevation={0}
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 8 },
            px: { xs: 4, md: 6 },
            borderRadius: 4,
            background: "linear-gradient(135deg, #0b58b9 0%, #003366 100%)",
            color: "#fff",
            animation: `${fadeIn} 1.1s ease-in-out`,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
            Ready to Work With Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, opacity: 0.9, fontSize: "1.1rem" }}
          >
            Experience the expertise and professionalism that our leadership
            brings to every client relationship
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <MuiLink
              href="/titpak-insurance/get-quote"
              underline="none"
              sx={{ textDecoration: "none" }}
            >
              <Chip
                label="Get a Quote"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#003366",
                  fontWeight: 600,
                  fontSize: "1rem",
                  py: 1,
                  px: 2,
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f1f6ff" },
                }}
              />
            </MuiLink>
            <MuiLink
              href="/titpak-insurance/contact"
              underline="none"
              sx={{ textDecoration: "none" }}
            >
              <Chip
                label="Contact Us"
                sx={{
                  borderColor: "#ffffff",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  py: 1,
                  px: 2,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              />
            </MuiLink>
          </Box>
        </Paper>
      </Container>

      {/* Main Footer */}
      <Box sx={{ backgroundColor: "#003366", color: "white", mt: 8 }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            px: { xs: 2, md: 4 },
            pt: 6,
            pb: 4,
          }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
            {/* Brand row (full width) */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                Titpak Insurance Brokers LTD
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, lineHeight: 1.6 }}
              >
                Reliable coverage for life, motor, property and marine. We help
                you choose the right protection with clear advice and support.
              </Typography>
            </Grid>

            {/* Navigation and Contact side-by-side */}
            <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Navigation
              </Typography>
              <Stack spacing={1}>
                <MuiLink
                  href="/titpak-insurance/"
                  underline="hover"
                  color="#cfe3ff"
                >
                  Home
                </MuiLink>
                <MuiLink
                  href="/titpak-insurance/claims"
                  underline="hover"
                  color="#cfe3ff"
                >
                  Claims
                </MuiLink>
                <MuiLink
                  href="/titpak-insurance/get-quote"
                  underline="hover"
                  color="#cfe3ff"
                >
                  Get Quote
                </MuiLink>
                <MuiLink
                  href="/titpak-insurance/contact"
                  underline="hover"
                  color="#cfe3ff"
                >
                  Contact
                </MuiLink>
                <MuiLink
                  href="/titpak-insurance/faqs"
                  underline="hover"
                  color="#cfe3ff"
                >
                  FAQs
                </MuiLink>
              </Stack>

              {/* Who We Are Sub-navigation */}
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 1, mt: 3 }}
              >
                Who We Are
              </Typography>
              <Stack spacing={1}>
                                  <MuiLink
                    href="/titpak-insurance/about-us"
                    underline="hover"
                    color="#cfe3ff"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    About Us
                  </MuiLink>
                  <MuiLink
                    href="/titpak-insurance/leadership"
                    underline="hover"
                    color="#cfe3ff"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    Leadership
                  </MuiLink>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Contact
              </Typography>
              <Stack spacing={0.75}>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                >
                  Email: titpakinsbrokersltd@gmail.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                >
                  Phone: +234 (0) 913-752-9774, +234 (0) 803-307-0308
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                >
                  Address: Nigeria Railway Compound, Off Moshood Abiola Rd,
                  P.M.B. 1037 Ebute Metta, Lagos, Nigeria
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                >
                  Hours: Mon–Fri, 9:00–17:00
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.25)" }} />
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              © {new Date().getFullYear()} Titpak Insurance. All rights
              reserved.
            </Typography>
            <Stack direction="row" spacing={2}>
              <MuiLink href="#" underline="hover" color="#cfe3ff">
                Privacy
              </MuiLink>
              <MuiLink href="#" underline="hover" color="#cfe3ff">
                Terms
              </MuiLink>
              <MuiLink href="#" underline="hover" color="#cfe3ff">
                Cookies
              </MuiLink>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
