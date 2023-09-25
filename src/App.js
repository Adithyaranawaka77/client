import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemPage from './components/ItemPage';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <Route path="/item/:itemId" component={ItemPage} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/" exact>
        {/* You can add a landing page component or content here */}
        <h1>Welcome to My E-commerce App</h1>
      </Route>
    </Router>
  );
}

export default App;
