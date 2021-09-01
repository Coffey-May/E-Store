import React,{lazy,Suspense} from 'react';
// import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

const Typography = lazy(() => import('@material-ui/core/Typography'));
const List = lazy(() => import('@material-ui/core/List'));
const ListItem = lazy(() => import('@material-ui/core/ListItem'));
const ListItemText = lazy(() => import('@material-ui/core/ListItemText'));

const Review = ({ checkoutToken }) => (
    <>
    <Suspense fallback={'loading...'}>
        <Typography variant="h6" gutterBottom>Order summary</Typography>
        </Suspense>
        <Suspense fallback={'loading...'}>
        <List disablePadding>
            {checkoutToken.live.line_items.map((product) => (
                <ListItem style={{ padding: '10px 0' }} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                    <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                </ListItem>
            ))}
            <ListItem style={{ padding: '10px 0' }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>
        </Suspense>
       
    </>
);

export default Review;