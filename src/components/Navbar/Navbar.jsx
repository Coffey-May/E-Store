import React, { useState,memo,lazy,Suspense } from 'react';
// import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
// import ShoppingCart from '@material-ui/icons/ShoppingCart';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Typography from '@material-ui/core/Typography';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';



// const Pit = lazy(() => import("../../assets/pitbull.jpg"))

import Pit from '../../assets/pitbull.jpg';
const ShoppingCart = lazy(() => import("@material-ui/icons/ShoppingCart"))
const AppBar = lazy(() => import("@material-ui/core/AppBar"))
const Toolbar = lazy(() => import("@material-ui/core/Toolbar"))
const IconButton = lazy(() => import("@material-ui/core/IconButton"))
const Badge = lazy(() => import("@material-ui/core/Badge"))
const MenuItem = lazy(() => import("@material-ui/core/MenuItem"))
const Menu = lazy(() => import("@material-ui/core/Menu"))
const Typography = lazy(() => import("@material-ui/core/Typography"))

// const useStyles = lazy(() => import("./styles"))


const Navbar = memo(({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Suspense fallback={'loading...'}>
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
    </Suspense>
  );

  return (
    <>
    <Suspense fallback={'loading...'}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            
            <img src={Pit} alt="commerce.js" className={classes.image} /> 
           
            BonesMalone
        
          </Typography>
        
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      </Suspense>
    </>
  );
});

export default Navbar;
