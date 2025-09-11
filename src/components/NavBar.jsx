import React, { useState } from "react";
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
  Collapse,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

export default function NavBar() {
  // Desktop dropdowns
  const [whatWeDoAnchorEl, setWhatWeDoAnchorEl] = useState(null);
  const [whoWeAreAnchorEl, setWhoWeAreAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const whatWeDoDropdownOpen = Boolean(whatWeDoAnchorEl);
  const whoWeAreDropdownOpen = Boolean(whoWeAreAnchorEl);
  const subMenuOpen = Boolean(subMenuAnchorEl);

  const handleWhatWeDoToggle = (event) => {
    if (whatWeDoDropdownOpen) {
      setWhatWeDoAnchorEl(null);
    } else {
      setWhatWeDoAnchorEl(event.currentTarget);
    }
  };

  const handleWhoWeAreToggle = (event) => {
    if (whoWeAreDropdownOpen) {
      setWhoWeAreAnchorEl(null);
    } else {
      setWhoWeAreAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setWhatWeDoAnchorEl(null);
    setWhoWeAreAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  const handleSubMenuOpen = (event, items) => {
    setSubMenuAnchorEl(event.currentTarget);
    setSubMenuItems(items);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
    setSubMenuItems([]);
  };

  // Mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [lifeInsuranceOpen, setLifeInsuranceOpen] = useState(false);
  const [generalAccidentOpen, setGeneralAccidentOpen] = useState(false);

  const whatWeDoItems = [
    { text: "Aviation", link: "/titpak-insurance/what-we-do/aviation" },
    { text: "Marine Hull & Cargo", link: "/titpak-insurance/what-we-do/marine-hull-cargo" },
    { text: "Oil, Gas & Energy", link: "/titpak-insurance/what-we-do/oil-gas-energy" },
    { text: "Motor", link: "/titpak-insurance/what-we-do/motor" },
    { text: "Engineering All Risks", link: "/titpak-insurance/what-we-do/engineering-all-risks" },
    { text: "Fire/Special Risks", link: "/titpak-insurance/what-we-do/fire" },
    { text: "Householders", link: "/titpak-insurance/what-we-do/householders" },
    { 
      text: "Life Insurance", 
      hasSubMenu: true,
      subItems: [
        { text: "Whole Life", link: "/titpak-insurance/what-we-do/life-insurance/whole-life" },
        { text: "Term Life", link: "/titpak-insurance/what-we-do/life-insurance/term-life" },
        { text: "Group Life", link: "/titpak-insurance/what-we-do/life-insurance/group-life" }
      ]
    },
    { 
      text: "General Accident Insurance",
      hasSubMenu: true,
      subItems: [
        { text: "Burglary", link: "/titpak-insurance/what-we-do/general-accident/burglary" },
        { text: "Money", link: "/titpak-insurance/what-we-do/general-accident/money" },
        { text: "Goods in Transit", link: "/titpak-insurance/what-we-do/general-accident/goods-in-transit" },
        { text: "Fidelity Guarantee", link: "/titpak-insurance/what-we-do/general-accident/fidelity-guarantee" },
        { text: "Group Personal Accident", link: "/titpak-insurance/what-we-do/general-accident/group-personal-accident" }
      ]
    },
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#003366",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/titpak-insurance/" style={{ textDecoration: "none" }}>
              <img
                src={logo}
                alt="Titpak Insurance Logo"
                style={{
                  height: 70,
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/titpak-insurance/"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Home
            </Button>

            {/* What We Do Dropdown */}
            <Button
              color="inherit"
              onClick={handleWhatWeDoToggle}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transform: whatWeDoDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              }
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              What We Do
            </Button>

            {/* Who We Are Dropdown */}
            <Button
              color="inherit"
              onClick={handleWhoWeAreToggle}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transform: whoWeAreDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              }
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Who We Are
            </Button>
            <Menu
              anchorEl={whoWeAreAnchorEl}
              open={whoWeAreDropdownOpen}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 200,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 2,
                  overflow: "hidden",
                },
              }}
            >
              <MenuItem
                component={Link}
                to="/titpak-insurance/about-us"
                onClick={handleMenuClose}
                sx={{
                  py: 1.5,
                  px: 3,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#003366",
                  "&:hover": {
                    backgroundColor: "rgba(0, 51, 102, 0.06)",
                    transform: "translateX(4px)",
                    color: "#004a99",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                About Us
              </MenuItem>
              <MenuItem
                component={Link}
                to="/titpak-insurance/leadership"
                onClick={handleMenuClose}
                sx={{
                  py: 1.5,
                  px: 3,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#003366",
                  borderTop: "1px solid rgba(0,0,0,0.04)",
                  "&:hover": {
                    backgroundColor: "rgba(0, 51, 102, 0.06)",
                    transform: "translateX(4px)",
                    color: "#004a99",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Leadership
              </MenuItem>
            </Menu>
            <Menu
              anchorEl={whatWeDoAnchorEl}
              open={whatWeDoDropdownOpen}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 220,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 2,
                  overflow: "hidden",
                },
              }}
            >
              {whatWeDoItems.map((item) => (
                <MenuItem
                  key={item.text}
                  component={item.hasSubMenu ? "div" : Link}
                  to={item.hasSubMenu ? undefined : item.link}
                  onClick={item.hasSubMenu ? (e) => handleSubMenuOpen(e, item.subItems) : handleMenuClose}
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#003366",
                    borderBottom: "1px solid rgba(0,0,0,0.04)",
                    "&:last-child": { borderBottom: "none" },
                    "&:hover": {
                      backgroundColor: "rgba(0, 51, 102, 0.06)",
                      transform: "translateX(4px)",
                      color: "#004a99",
                    },
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {item.text}
                  {item.hasSubMenu && (
                    <ChevronRightIcon sx={{ fontSize: 16, ml: 1 }} />
                  )}
                </MenuItem>
              ))}
            </Menu>

            {/* Sub-menu for What We Do */}
            <Menu
              anchorEl={subMenuAnchorEl}
              open={subMenuOpen}
              onClose={handleSubMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 200,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 2,
                  overflow: "hidden",
                },
              }}
            >
              {subMenuItems.map((subItem) => (
                <MenuItem
                  key={subItem.text}
                  component={Link}
                  to={subItem.link}
                  onClick={handleMenuClose}
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#003366",
                    borderBottom: "1px solid rgba(0,0,0,0.04)",
                    "&:last-child": { borderBottom: "none" },
                    "&:hover": {
                      backgroundColor: "rgba(0, 51, 102, 0.06)",
                      transform: "translateX(4px)",
                      color: "#004a99",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {subItem.text}
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
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Claims
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/titpak-insurance/get-quote"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Get Quote
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/titpak-insurance/contact"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
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
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              FAQs
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{
              display: { sm: "none" },
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 2,
              p: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon sx={{ fontSize: 28, color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Close button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ px: 1 }}>
            {/* Home */}
            <ListItem
              button
              component={Link}
              to="/titpak-insurance/"
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
              }}
            >
              <ListItemText
                primary="Home"
                sx={{
                  color: "#003366",
                  fontWeight: 500,
                  "& .MuiTypography-root": { fontSize: "1rem" },
                }}
              />
            </ListItem>

            {/* What We Do collapsible */}
            <ListItem
              button
              onClick={() => setWhatWeDoOpen((prev) => !prev)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
              }}
            >
              <ListItemText
                primary="What We Do"
                sx={{
                  color: "#003366",
                  fontWeight: 500,
                  "& .MuiTypography-root": { fontSize: "1rem" },
                }}
              />
              {whatWeDoOpen ? (
                <ExpandLess sx={{ color: "#003366" }} />
              ) : (
                <ExpandMore sx={{ color: "#003366" }} />
              )}
            </ListItem>
            <Collapse in={whatWeDoOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {whatWeDoItems.map((sub) => (
                  <React.Fragment key={sub.text}>
                    {sub.hasSubMenu ? (
                      <>
                        <ListItem
                          button
                          onClick={() => {
                            if (sub.text === "Life Insurance") {
                              setLifeInsuranceOpen(!lifeInsuranceOpen);
                            } else if (sub.text === "General Accident Insurance") {
                              setGeneralAccidentOpen(!generalAccidentOpen);
                            }
                          }}
                          sx={{
                            pl: 4,
                            borderRadius: 2,
                            ml: 1,
                            mb: 0.5,
                            "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
                          }}
                        >
                          <ListItemText
                            primary={sub.text}
                            sx={{
                              color: "#666",
                              "& .MuiTypography-root": { fontSize: "0.9rem" },
                            }}
                          />
                          {(sub.text === "Life Insurance" ? lifeInsuranceOpen : generalAccidentOpen) ? (
                            <ExpandLess sx={{ color: "#666" }} />
                          ) : (
                            <ExpandMore sx={{ color: "#666" }} />
                          )}
                        </ListItem>
                        <Collapse 
                          in={sub.text === "Life Insurance" ? lifeInsuranceOpen : generalAccidentOpen} 
                          timeout="auto" 
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {sub.subItems.map((subSubItem) => (
                              <ListItem
                                key={subSubItem.text}
                                button
                                component={Link}
                                to={subSubItem.link}
                                onClick={() => setDrawerOpen(false)}
                                sx={{
                                  pl: 6,
                                  borderRadius: 2,
                                  ml: 1,
                                  mb: 0.5,
                                  "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
                                }}
                              >
                                <ListItemText
                                  primary={subSubItem.text}
                                  sx={{
                                    color: "#888",
                                    "& .MuiTypography-root": { fontSize: "0.85rem" },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                      </>
                    ) : (
                      <ListItem
                        button
                        component={Link}
                        to={sub.link}
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                          pl: 4,
                          borderRadius: 2,
                          ml: 1,
                          mb: 0.5,
                          "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
                        }}
                      >
                        <ListItemText
                          primary={sub.text}
                          sx={{
                            color: "#666",
                            "& .MuiTypography-root": { fontSize: "0.9rem" },
                          }}
                        />
                      </ListItem>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Collapse>

            {/* Who We Are collapsible */}
            <ListItem
              button
              onClick={() => setWhoWeAreOpen((prev) => !prev)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
              }}
            >
              <ListItemText
                primary="Who We Are"
                sx={{
                  color: "#003366",
                  fontWeight: 500,
                  "& .MuiTypography-root": { fontSize: "1rem" },
                }}
              />
              {whoWeAreOpen ? (
                <ExpandLess sx={{ color: "#003366" }} />
              ) : (
                <ExpandMore sx={{ color: "#003366" }} />
              )}
            </ListItem>
            <Collapse in={whoWeAreOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  component={Link}
                  to="/titpak-insurance/about-us"
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    pl: 4,
                    borderRadius: 2,
                    ml: 1,
                    mb: 0.5,
                    "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
                  }}
                >
                  <ListItemText
                    primary="About Us"
                    sx={{
                      color: "#666",
                      "& .MuiTypography-root": { fontSize: "0.9rem" },
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/titpak-insurance/leadership"
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    pl: 4,
                    borderRadius: 2,
                    ml: 1,
                    mb: 0.5,
                    "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
                  }}
                >
                  <ListItemText
                    primary="Leadership"
                    sx={{
                      color: "#666",
                      "& .MuiTypography-root": { fontSize: "0.9rem" },
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Claims */}
            <ListItem
              button
              component={Link}
              to="/titpak-insurance/claims"
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
              }}
            >
              <ListItemText
                primary="Claims"
                sx={{
                  color: "#003366",
                  fontWeight: 500,
                  "& .MuiTypography-root": { fontSize: "1rem" },
                }}
              />
            </ListItem>

            {/* Get Quote */}
            <ListItem
              button
              component={Link}
              to="/titpak-insurance/get-quote"
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
              }}
            >
              <ListItemText
                primary="Get Quote"
                sx={{
                  color: "#003366",
                  fontWeight: 500,
                  "& .MuiTypography-root": { fontSize: "1rem" },
                }}
              />
            </ListItem>

            {/* Contact */}
            <ListItem
              button
              component={Link}
              to="/titpak-insurance/contact"
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
              }}
            >
              <ListItemText
                primary="Contact"
                sx={{
                  color: "#003366",
                  fontWeight: 500,
                  "& .MuiTypography-root": { fontSize: "1rem" },
                }}
              />
            </ListItem>

            {/* FAQs */}
            <ListItem
              button
              component={Link}
              to="/titpak-insurance/faqs"
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": { backgroundColor: "rgba(0, 51, 102, 0.04)" },
              }}
            >
              <ListItemText
                primary="FAQs"
                sx={{
                  color: "#003366",
                  fontWeight: 500,
                  "& .MuiTypography-root": { fontSize: "1rem" },
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
