import React from 'react';
// import Grid from '@material-ui/core/Grid';

// import Product from './Product/Product';
import useStyles from './styles';
// import { Container} from '@material-ui/core';
// import {  Typography } from '@material-ui/core';
import loadable from '@loadable/component'

const Product = loadable(() => import("./Product/Product"))
const Container = loadable(() => import("@material-ui/core/Container"))
const Typography = loadable(() => import("@material-ui/core/Typography"))
const Grid = loadable(() => import("@material-ui/core/Grid"))


const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
<Container>
      <Typography variant={'h4'}>Our Dog Treats.</Typography>
      </Container>
     <hr />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;