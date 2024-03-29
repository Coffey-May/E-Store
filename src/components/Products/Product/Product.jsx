import React from "react";
import loadable from "@loadable/component";
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
// import { AddShoppingCart } from '@material-ui/icons';

import useStyles from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = loadable(() => import("@material-ui/core/Card"));
const CardMedia = loadable(() => import("@material-ui/core/CardMedia"));
const CardContent = loadable(() => import("@material-ui/core/CardContent"));
const CardActions = loadable(() => import("@material-ui/core/CardActions"));
const Typography = loadable(() => import("@material-ui/core/Typography"));
const IconButton = loadable(() => import("@material-ui/core/IconButton"));
const AddShoppingCart = loadable(() =>
  import("@material-ui/icons/AddShoppingCart")
);

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  // const notify = () => toast("You've added an item to your cart.");
  const notify = () =>
    toast.success("You've added an item to your cart.", {
      theme: "dark",
    });

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
    notify();
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        alt="dog treats"
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
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
