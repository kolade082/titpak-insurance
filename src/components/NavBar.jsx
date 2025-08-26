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
import { Link } from "react-router-dom"

import logo from '../assets/logo.png'

export default function NavBar() {
  // Desktop dropdown
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget)
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
    { text: 'Home', link: '/' },
    { text: 'Who We Are', link: '/who-we-are' },
    { text: 'Contact', link: '/contact' },
    { text: 'FAQs', link: '/faqs' },
  ]

  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#003366" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="Titpak Insurance Logo" style={{ height: 50 }} />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/who-we-are">Who We Are</Button>

            {/* What We Do Dropdown */}
            <Button
              color="inherit"
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
            >
              What We Do
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseEnter: handleMenuOpen, onMouseLeave: handleMenuClose }}
            >
              {whatWeDoItems.map(item => (
                <MenuItem key={item.text} component={Link} to={item.link} onClick={handleMenuClose}>
                  {item.text}
                </MenuItem>
              ))}
            </Menu>

            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/faqs">FAQs</Button>
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

          <List>
            {menuItems.slice(0, 2).map(item => (
              <ListItem button key={item.text} component={Link} to={item.link} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.text} sx={{ color: 'black' }} />
              </ListItem>
            ))}

            {/* What We Do collapsible */}
            <ListItem button onClick={() => setWhatWeDoOpen(prev => !prev)}>
              <ListItemText primary="What We Do" sx={{ color: 'black' }} />
              {whatWeDoOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={whatWeDoOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {whatWeDoItems.map(sub => (
                  <ListItem key={sub.text} button component={Link} to={sub.link} onClick={() => setDrawerOpen(false)} sx={{ pl: 4 }}>
                    <ListItemText primary={sub.text} sx={{ color: 'black' }} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {menuItems.slice(2).map(item => (
              <ListItem button key={item.text} component={Link} to={item.link} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.text} sx={{ color: 'black' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
