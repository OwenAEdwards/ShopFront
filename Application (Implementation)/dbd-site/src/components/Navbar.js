// File: Navbar.js
// This file contains the Navbar component that displays the navigation bar at the top of the page. 
// It includes links to different pages, a user profile menu, and a responsive menu for small screens.
// The component also handles navigation logic based on user interactions. All components are rendered conditionally based on the state.
// See bottom of file for the conditional rendering of each component.

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BrandIcon from '@mui/icons-material/LocalGroceryStore';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import { Dialog } from '@mui/material';
import Cart from './Cart';
import Searchbar from './Searchbar';
import AddProduct from './AdminTools';
import { checkCookie, checkAuth } from './Helpers/auth';
import {productsData} from './Objects/productsData.objects';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [showAuth, setShowAuth] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  var products = productsData;

  // List of settings
  const settings = ['Cart'];
  const pages = ['About'];

  // Menu items based on logged in status
  if (checkCookie() == true) {
    settings.push('Logout');
  } else { 
    settings.push('Login');
  }

  // Check if user is admin
  if (checkAuth() == 'Admin') {
    pages.push('Admin Tools');
  }

  const handleNavClick = (button) => {
    setAnchorElUser(null); // close menu after clicking

    var selectedButton = button.target.innerText;

    // Add logic to handle navigation based on the button clicked
    if (selectedButton === 'Login') {
      // Show the login component
      setShowLogin(true);
    } else if (selectedButton === 'Logout') {
      // Show the logout component
      setShowLogin(true);
    } else if (selectedButton === 'Cart') {
      // Redirect to the cart page
      setShowCart(true);
    }
  };

  const handleSettingsClick = (button) => {
    setAnchorElUser(null); // close menu after clicking

    var selectedButton = button.target.innerText;

    console.log('selectedButton:', selectedButton);

    // Add logic to handle navigation based on the button clicked
    if (selectedButton === 'ADMIN TOOLS') {
      // Show the admin tools component
      setShowAuth(true);
    }
  };

  // return the responsive app bar
  return (
    // THE BELOW CODE IS MOBILE ONLY / SMALL SCREENS
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BrandIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/index.html"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            eCommerce
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BrandIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleSettingsClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Show the search bar */}
          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Searchbar/>
          </Box> 

          {/* Add blank space */}
          <Box sx={{ flexGrow: 0, width: '16px' }}></Box>

          {/* Show the user menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleNavClick}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Show login component */}
      {showLogin && (
        <>
          <Dialog open={showLogin} onClose={() => setShowLogin(false)}>
            {checkCookie() ? <Logout /> : <Login />}
          </Dialog>
        </>
      )}
      {/* Show cart component */}
      {showCart && (
        <>
          <Dialog open={showCart} onClose={() => setShowCart(false)}>
            <Cart />
          </Dialog>
        </>
      )}
      {/* Show the admin tools */}
      {showAuth && (
        <>
          <Dialog open={showAuth} onClose={() => setShowAuth(false)}>
            <AddProduct />
          </Dialog>
        </>
      )}
    </AppBar>
  );
}
export default ResponsiveAppBar;
export { checkCookie, checkAuth };

