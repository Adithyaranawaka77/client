import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Fetch wishlist items from the backend API
    axios.get('/api/wishlist').then((response) => {
      setWishlistItems(response.data);
    });
  }, []);

  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item._id}>
            {item.productName} - ${item.productPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;