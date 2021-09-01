import React, { useState, useEffect, lazy, Suspense } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
// import { Navbar, Products, Cart, Checkout } from './components';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const Navbar = lazy(() => import("./components/Navbar/Navbar"))
const Products = lazy(() => import("./components/Products/Products"))
const Cart = lazy(() => import("./components/Cart/Cart"))
const Checkout = lazy(() => import("./components/CheckoutForm/Checkout/Checkout"))
const CssBaseline = lazy(() => import("@material-ui/core/CssBaseline"))

// const theme = createMuiTheme({
//   typography: {
//     fontDisplay: 'swap',
//     fontFamily: [
//       'Lucida', ' Grande, sans-serif',
//       'Chilanka',
//       'cursive',
//     ].join(','),
//   },
// });


const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    console.log(data)
    setProducts(data);
  };
  // console.log("products:", products)

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);



  return (
    // <ThemeProvider theme={theme}>
    <Router>
      <div style={{ display: 'flex' }}>
        <Suspense fallback={<div>loading...</div>}>
          <CssBaseline />

          <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />

          <Switch>
            <Route exact path="/">

              <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty={handleUpdateCartQty} />

            </Route>
            <Route exact path="/cart">

              <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />

            </Route>
            <Route path="/checkout" exact>

              <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />

            </Route>

          </Switch>
        </Suspense>
      </div>
    </Router>
    // </ThemeProvider>


  );
};

export default App;