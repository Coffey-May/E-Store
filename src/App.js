import React from 'react';
import { commerce } from './lib/commerce';
import { Navbar, Products } from './components'

function App() {
  const [products, setsProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setsProducts(data)
  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Navbar />
      <Products />

    </div>
  );
}

export default App;
