import React,{lazy,Suspense,memo,useCallback} from 'react';
// import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

// const useStyles = lazy(() => import("./styles"))

const Typography = lazy(() => import("@material-ui/core/Typography"))
const Button = lazy(() => import("@material-ui/core/Button"))
const Card = lazy(() => import("@material-ui/core/Card"))
const CardActions = lazy(() => import("@material-ui/core/CardActions"))
const CardContent = lazy(() => import("@material-ui/core/CardContent"))
const CardMedia = lazy(() => import("@material-ui/core/CardMedia"))



const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    const handleUpdateCartQty = useCallback((lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity),[onUpdateCartQty]);

    const handleRemoveFromCart = useCallback((lineItemId) => onRemoveFromCart(lineItemId),[onRemoveFromCart]);

    return (
        <Suspense fallback={'loading...'}>
        <Card className="cart-item">
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
        </Suspense>
    );
};

export default memo(CartItem);