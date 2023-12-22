import React, { useEffect, useState } from 'react';
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from '../../utilities/fakedatabase';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import happyimg from '../../images/giphy.gif';
const Preview = () => {
  const [cart, setcart] = useState([]);
  const [oderPlaced, setoderPlaced] = useState(false);
  const handelPlaceOrder = () => {
    setcart([]);
    setoderPlaced(true);
    processOrder();
  };

  const removeproduct = productKey => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setcart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setcart(cartProducts);
  }, []);
  let thankyou;
  if (oderPlaced) {
    thankyou = <img src={happyimg} alt="" />;
  }
  return (
    <>
      <Header></Header>
      <div className="shop-container">
        <div className="product-container">
          <h2>Cart items: {cart.length}</h2>;
          {cart.map(pd => (
            <ReviewItem
              key={pd.key}
              removeproduct={removeproduct}
              product={pd}
            ></ReviewItem>
          ))}
          {thankyou}
        </div>
        <div className="cart-container">
          <Cart card={cart}>
            <button onClick={handelPlaceOrder} className="main-btn">
              Place Order
            </button>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Preview;
