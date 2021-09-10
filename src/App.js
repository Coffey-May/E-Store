import React, { useState, useEffect, useCallback, memo } from 'react';
// import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import loadable from '@loadable/component'

// import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';

const CssBaseline = loadable(() => import("@material-ui/core/CssBaseline"))
// const createMuiTheme = loadable(() => import("@material-ui/core/styles/createMuiTheme"))
// const MuiThemeProvider = loadable(() => import("@material-ui/core/styles/MuiThemeProvider"))
const Navbar = loadable(() => import("./components/Navbar/Navbar"))
const Cart = loadable(() => import("./components/Cart/Cart"))
const Products = loadable(() => import("./components/Products/Products"))
const Checkout = loadable(() => import("./components/CheckoutForm/Checkout/Checkout"))
const Footer = loadable(() => import("./components/Footer/Footer"))



const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    background: {
      default: "#fffdfc"
    }
  }
});



const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = useCallback(async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }, []);

  const fetchCart = useCallback(async () => {
    setCart(await commerce.cart.retrieve());
  }, []);

  const handleAddToCart = useCallback(async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }, []);

  const handleUpdateCartQty = useCallback(async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  }, []);

  const handleRemoveFromCart = useCallback(async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  }, []);

  const handleEmptyCart = useCallback(async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  }, []);

  const refreshCart = useCallback(async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }, []);

  const handleCaptureCheckout = useCallback(async (checkoutTokenId, newOrder) => {
    console.log(checkoutTokenId, newOrder)
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }, [refreshCart]);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [fetchCart, fetchProducts]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (

    <>
      <Router>
        {console.log("app")}
        <div style={{ display: 'flex' }}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
            <Switch>
              <Route exact path="/">
                <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
              </Route>
              <Route exact path="/cart">
                <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
              </Route>
              <Route path="/checkout" exact>
                <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
              </Route>

            </Switch>

          </MuiThemeProvider>
        </div>

      </Router>
      <Footer />

    </>
  );
};

export default memo(App);