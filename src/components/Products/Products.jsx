import React, { memo } from "react";
import Parallax from "react-rellax";
import "./style.css";

// import Grid from '@material-ui/core/Grid';

// import Product from './Product/Product';
import useStyles from "./styles";
// import { Container} from '@material-ui/core';
// import {  Typography } from '@material-ui/core';
import loadable from "@loadable/component";
import dogs from "../../assets/doubledogs.webp";

const About = loadable(() => import("../About/About"));
const Product = loadable(() => import("./Product/Product"));
const Container = loadable(() => import("@material-ui/core/Container"));
const Typography = loadable(() => import("@material-ui/core/Typography"));
const Grid = loadable(() => import("@material-ui/core/Grid"));
const Box = loadable(() => import("@material-ui/core/Box"));

const Title = memo(() => {
  const classes = useStyles();
  return (
    <Parallax speed={4}>
      <Container className={classes.title}>
        <Typography
          variant="h2"
          style={{ margin: "0 auto", padding: ".5em" }}
          className={classes.headLine}
          color="inherit"
          id="animate-charcter"
        >
          BONES MALONES
        </Typography>
        <Typography variant="h2" className={classes.title2}>
          <em>A TASTE OF HOME</em>
        </Typography>
        <Typography variant="h3" className={classes.title3}>
          Gourmet Dog Treats...
        </Typography>
      </Container>
    </Parallax>
  );
});

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          backgroundColor: "rgba(20,20,20,.75)",
          backgroundlBlendMode: " multiply",
        }}
      >
        <img
          className={classes.image}
          style={{
            backgroundSize: "cover",
            height: "auto",
            zIndex: "-1",
            position: "fixed",
          }}
          src={dogs}
          alt="dogs with hats"
        />
        <Parallax speed={0}>
          <Title />
          <main
            style={{ minHeight: "90vh" }}
            className={classes.content}
            id="page"
          >
            <Typography className={classes.knockOut} variant={"p"}>
              OUR TREATS
            </Typography>

            <hr />
            <Box mt={6}>
              <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <About />
          </main>
        </Parallax>
      </div>
    </>
  );
};

export default Products;
