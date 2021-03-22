import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import Pit from '../../assets/pitbull.jpg';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variiant="h6" className={classes.title} color="inherit">
                        <img src={Pit} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="display cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
