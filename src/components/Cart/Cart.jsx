import React from 'react';
// import { Container, Typography, Button, Grid } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import loadable from '@loadable/component';
import doggo from '../../assets/doggo.jpg'
// import CartItem  from "./CartItem/CartItem"
const CartItem = loadable(() => import('./CartItem/CartItem'));

const Container = loadable(() => import('@material-ui/core/Container'));
const Typography = loadable(() => import('@material-ui/core/Typography'));
const Button = loadable(() => import('@material-ui/core/Button'));
const Grid = loadable(() => import('@material-ui/core/Grid'));

// const useStyles = lazy(() => import("./styles"))


// const renderLoader = () => <h1>Loading...</h1>;

//Cart
const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();



    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (<>
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
        </>
    );

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
     <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    return (
        
        
        <Container style={{minHeight:'90vh',width:'100vw',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundImage:`url(${doggo})`}}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ?   renderEmptyCart() : renderCart()}
        </Container>
        
    );
};

export default Cart;