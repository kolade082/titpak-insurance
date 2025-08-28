import React from "react";
import {
  Container,
  Box,
  Typography,
  Chip,
  Paper,
} from "@mui/material";
import { keyframes } from "@mui/system";
import FAQSection from "../components/FAQSection";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function FAQ() {
  const faqs = [
    {
      q: "How do I get a quote?",
      a: "Click 'Get a Quote,' answer a few questions, and an advisor will reach out with tailored options.",
    },
    {
      q: "What documents are required?",
      a: "Typically a valid ID, proof of address, and relevant asset details (vehicle, property, cargo).",
    },
    {
      q: "How fast are claims processed?",
      a: "Simple claims are often settled within days once documents are verified.",
    },
    {
      q: "What types of insurance do you offer?",
      a: "We offer comprehensive coverage including Fire, Marine, Motor, Life, Property, Business, Engineering, Aviation, Oil/Gas, and General Accident insurance.",
    },
    {
      q: "Can I cancel my policy anytime?",
      a: "Yes, you can cancel your policy at any time. We'll process the cancellation and refund any unused premium according to your policy terms.",
    },
    {
      q: "How do I file a claim?",
      a: "You can file a claim through our website, by calling our claims hotline, or by visiting our office. We'll guide you through the entire process.",
    },
    {
      q: "What is the claims process?",
      a: "Our claims process involves: 1) Initial report, 2) Documentation review, 3) Investigation if needed, 4) Assessment, and 5) Settlement. We aim to complete this as quickly as possible.",
    },
    {
      q: "Do you offer 24/7 support?",
      a: "Yes, we provide 24/7 emergency support for urgent claims and assistance. Our team is always available when you need us most.",
    },
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
          label="Frequently Asked Questions" 
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
          Got Questions?
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'rgba(0,0,0,0.72)', 
            mb: 2,
            fontWeight: 500
          }}
        >
          We've got answers
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
          Find answers to the most common questions about our insurance services, 
          claims process, and policies. Can't find what you're looking for? 
          Contact our support team.
        </Typography>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#003366', 
              mb: 2, 
              fontWeight: 800 
            }}
          >
            Common Questions
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(0,0,0,0.7)', 
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Everything you need to know about Titpak Insurance
          </Typography>
        </Box>
        <FAQSection faqs={faqs} />
      </Box>

      {/* Contact CTA */}
      <Paper elevation={0} sx={{
        textAlign: 'center',
        py: { xs: 6, md: 8 },
        px: { xs: 4, md: 6 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, #0b58b9 0%, #003366 100%)',
        color: '#fff',
        animation: `${fadeIn} 1.1s ease-in-out`
      }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
          Still have questions?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, fontSize: '1.1rem' }}>
          Our team is here to help. Get in touch with us for personalized assistance.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            📞 Call: +234 (0) 913-752-9774, +234 (0) 803-307-0308
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            📧 Email: titpakinsbrokersltd@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            🏢 Visit: Nigeria Railway Compound, Off Moshood Abiola Rd, P.M.B. 1037 Ebute Metta, Lagos, Nigeria
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
