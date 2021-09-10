import React, { useState,memo } from 'react';

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
import loadable from "@loadable/component"


import useStyles from './styles';


// const Pit = loadable(() => import('../Navbar/image/pitbull.jpg'))

import Pit from '../../assets/pitbull.jpg';
const ShoppingCart = loadable(() => import("@material-ui/icons/ShoppingCart"))
const AppBar = loadable(() => import("@material-ui/core/AppBar"))
const Toolbar = loadable(() => import("@material-ui/core/Toolbar"))
const IconButton = loadable(() => import("@material-ui/core/IconButton"))
const Badge = loadable(() => import("@material-ui/core/Badge"))
const MenuItem = loadable(() => import("@material-ui/core/MenuItem"))
const Menu = loadable(() => import("@material-ui/core/Menu"))
const Typography = loadable(() => import("@material-ui/core/Typography"))

const Navbar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
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
  );

  return (
    <>
    {console.log("nav")}
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
             <img src={Pit} alt="cartoon dog" className={classes.image}/> 
                 Bones Malone
            <br />
                 Taste Of Home
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
    </>
  );
};

export default memo(Navbar);
