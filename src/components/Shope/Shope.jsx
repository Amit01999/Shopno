import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Shope.css';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {
  addToDatabaseCart,
  getDatabaseCart,
} from '../../utilities/fakedatabase';

const Shope = () => {
  // Cart
  const first10 = fakeData.slice(0, 10);
  const [product, setproduct] = useState(first10);
  const [card, setcard] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    const previousCart = productKey.map(existKey => {
      const product = fakeData.find(pd => pd.key === existKey);
      product.quantity = saveCart[existKey];
      return product;
    });
    setcard(previousCart);
  }, []);

  const handeladdproduct = product => {
    const toBeAddedKey = product.key;
    const sameProduct = card.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCard;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const other = card.filter(pd => pd.key !== toBeAddedKey);
      newCard = [...other, sameProduct];
    } else {
      product.quantity = 1;
      newCard = [...card, product];
    }

    setcard(newCard);
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {product.map(pd => (
            <Product
              key={pd.key}
              showAddToCart={true}
              product={pd}
              handeladdproduct={handeladdproduct}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Cart card={card}>
          <Link to="/review">
            <button className="main-btn">View order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shope;
