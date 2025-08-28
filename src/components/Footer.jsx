import { Box, Typography, Grid, Link as MuiLink, Divider, Stack } from "@mui/material"

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "#003366", color: "white", mt: 8 }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 }, pt: 6, pb: 4 }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
            {/* Brand row (full width) */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Titpak Insurance Brokers LTD</Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                Reliable coverage for life, motor, property and marine. We help you choose the right protection with clear advice and support.
              </Typography>
            </Grid>

            {/* Navigation and Contact side-by-side */}
            <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Navigation</Typography>
              <Stack spacing={1}>
                <MuiLink href="/titpak-insurance/" underline="hover" color="#cfe3ff">Home</MuiLink>
                <MuiLink href="/who-we-are" underline="hover" color="#cfe3ff">Who we are</MuiLink>
                <MuiLink href="/titpak-insurance/contact" underline="hover" color="#cfe3ff">Contact</MuiLink>
                <MuiLink href="/titpak-insurance/faqs" underline="hover" color="#cfe3ff">FAQs</MuiLink>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Contact</Typography>
              <Stack spacing={0.75}>
                <Typography variant="body2" sx={{ opacity: 0.9, whiteSpace: 'normal', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>Email: titpakinsbrokersltd@gmail.com</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, whiteSpace: 'normal', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>Phone: +234 (0) 913-752-9774, +234 (0) 803-307-0308</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, whiteSpace: 'normal', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>Address: Nigeria Railway Compound, Off Moshood Abiola Rd, P.M.B. 1037 Ebute Metta, Lagos, Nigeria</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, whiteSpace: 'normal', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>Hours: Mon–Fri, 9:00–17:00</Typography>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.25)" }} />
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={1}>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              © {new Date().getFullYear()} Titpak Insurance. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2}>
              <MuiLink href="#" underline="hover" color="#cfe3ff">Privacy</MuiLink>
              <MuiLink href="#" underline="hover" color="#cfe3ff">Terms</MuiLink>
              <MuiLink href="#" underline="hover" color="#cfe3ff">Cookies</MuiLink>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
