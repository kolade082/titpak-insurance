import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Collapse
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from "react-router-dom"

import logo from '../assets/logo.jpg'

export default function NavBar() {
  // Desktop dropdown
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  
  const handleMenuToggle = (event) => {
    if (open) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }
  
  const handleMenuClose = () => setAnchorEl(null)

  // Mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false)

  const whatWeDoItems = [
    { text: 'Fire', link: '/what-we-do/fire' },
    { text: 'Marine Cargo', link: '/what-we-do/marine-cargo' },
    { text: 'Marine Hull', link: '/what-we-do/marine-hull' },
    { text: 'Motor', link: '/what-we-do/motor' },
    { text: 'Engineering', link: '/what-we-do/engineering' },
    { text: 'All General Accident', link: '/what-we-do/general-accident' },
    { text: 'Aviation', link: '/what-we-do/aviation' },
    { text: 'Oil/Gas', link: '/what-we-do/oil-gas' },
    { text: 'Life Insurance', link: '/what-we-do/life' },
  ]

  const menuItems = [
    { text: 'Home', link: '/titpak-insurance/' },
    { text: 'Who We Are', link: '/who-we-are' },
    { text: 'Claims', link: '/titpak-insurance/claims' },
    { text: 'Contact', link: '/contact' },
    { text: 'FAQs', link: '/titpak-insurance/faqs' },
  ]

  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ 
        backgroundColor: "#003366",
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/titpak-insurance/" style={{ textDecoration: 'none' }}>
              <img 
                src={logo} 
                alt="Titpak Insurance Logo" 
                style={{ 
                  height: 70,
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }} 
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/titpak-insurance/"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/who-we-are"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Who We Are
            </Button>

            {/* What We Do Dropdown */}
            <Button
              color="inherit"
              onClick={handleMenuToggle}
              endIcon={<KeyboardArrowDownIcon sx={{ 
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }} />}
              sx={{ 
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                cursor: 'pointer',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              What We Do
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 220,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 2,
                  overflow: 'hidden'
                }
              }}
            >
              {whatWeDoItems.map(item => (
                <MenuItem 
                  key={item.text} 
                  component={Link} 
                  to={item.link} 
                  onClick={handleMenuClose}
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: '#003366',
                    borderBottom: '1px solid rgba(0,0,0,0.04)',
                    '&:last-child': { borderBottom: 'none' },
                    '&:hover': { 
                      backgroundColor: 'rgba(0, 51, 102, 0.06)',
                      transform: 'translateX(4px)',
                      color: '#004a99'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>

            <Button 
              color="inherit" 
              component={Link} 
              to="/titpak-insurance/claims"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Claims
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contact"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Contact
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/titpak-insurance/faqs"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              FAQs
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { sm: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Close button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ px: 1 }}>
            {menuItems.slice(0, 2).map(item => (
              <ListItem 
                button 
                key={item.text} 
                component={Link} 
                to={item.link} 
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  '&:hover': { backgroundColor: 'rgba(0, 51, 102, 0.04)' }
                }}
              >
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    color: '#003366', 
                    fontWeight: 500,
                    '& .MuiTypography-root': { fontSize: '1rem' }
                  }} 
                />
              </ListItem>
            ))}

            {/* What We Do collapsible */}
            <ListItem 
              button 
              onClick={() => setWhatWeDoOpen(prev => !prev)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                '&:hover': { backgroundColor: 'rgba(0, 51, 102, 0.04)' }
              }}
            >
              <ListItemText 
                primary="What We Do" 
                sx={{ 
                  color: '#003366', 
                  fontWeight: 500,
                  '& .MuiTypography-root': { fontSize: '1rem' }
                }} 
              />
              {whatWeDoOpen ? <ExpandLess sx={{ color: '#003366' }} /> : <ExpandMore sx={{ color: '#003366' }} />}
            </ListItem>
            <Collapse in={whatWeDoOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {whatWeDoItems.map(sub => (
                  <ListItem 
                    key={sub.text} 
                    button 
                    component={Link} 
                    to={sub.link} 
                    onClick={() => setDrawerOpen(false)} 
                    sx={{ 
                      pl: 4, 
                      borderRadius: 2,
                      ml: 1,
                      mb: 0.5,
                      '&:hover': { backgroundColor: 'rgba(0, 51, 102, 0.04)' }
                    }}
                  >
                    <ListItemText 
                      primary={sub.text} 
                      sx={{ 
                        color: '#666', 
                        '& .MuiTypography-root': { fontSize: '0.9rem' }
                      }} 
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {menuItems.slice(2).map(item => (
              <ListItem 
                button 
                key={item.text} 
                component={Link} 
                to={item.link} 
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  '&:hover': { backgroundColor: 'rgba(0, 51, 102, 0.04)' }
                }}
              >
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    color: '#003366', 
                    fontWeight: 500,
                    '& .MuiTypography-root': { fontSize: '1rem' }
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
