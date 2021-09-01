import React, {lazy,Suspense} from 'react';
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
const AddShoppingCart = lazy(() => import('@material-ui/icons/AddShoppingCart'));
const Card = lazy(() => import('@material-ui/core/Card'));
const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));
const CardContent = lazy(() => import('@material-ui/core/CardContent'));
const CardActions = lazy(() => import('@material-ui/core/CardActions'));
const Typography = lazy(() => import('@material-ui/core/Typography'));
const IconButton = lazy(() => import('@material-ui/core/IconButton'));


// const useStyles = lazy(() => import("./styles"))

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;