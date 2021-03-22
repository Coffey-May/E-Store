import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'

const products = [
    { id: 1, name: 'shoes', description: ' shoey shoe', price: '12', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shoes-1610418585.jpg?crop=0.502xw:1.00xh;0.282xw,0&resize=640:*' },
    { id: 2, name: 'dksjbf', description: ' shoesdaknd', price: '44', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shoes-1610418585.jpg?crop=0.502xw:1.00xh;0.282xw,0&resize=640:*' }
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
        </main>
    )
}
export default Products