import React from 'react';
import { Link } from 'react-router-dom';

function ItemPage({ item }) {
  return (
    <div>
      <h2>{item.productName}</h2>
      <p>{item.productDescription}</p>
      <p>Price: ${item.productPrice}</p>
      <Link to={`/wishlist/add/${item._id}`}>Add to Wishlist</Link>
    </div>
  );
}

export default ItemPage;