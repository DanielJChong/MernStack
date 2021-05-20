import React from 'react';
import { Router, Redirect } from '@reach/router';

import Product from './views/Product';
import ProductDetail from './views/ProductDetail';
import EditProduct from './views/EditProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Product path="/product"/>
        <ProductDetail path="/product/:id" />
        <EditProduct path="/product/:id/edit"/>
        <Redirect from="/" to="/product" noThrow/>
      </Router>
    </div>
  );
}

export default App;