import React, {lazy,Suspense} from 'react';
import Grid from '@material-ui/core/Grid';

// import Product from './Product/Product';
import useStyles from './styles';

// const useStyles = lazy(() => import("./styles"))
const Product = lazy(() => import('./Product/Product'));



const Products = ({ products, onAddToCart }) => {
const classes = useStyles();
console.log(products)

  // if (!products.length) return <p>Loading...</p>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </Suspense>
  );
};

export default Products;