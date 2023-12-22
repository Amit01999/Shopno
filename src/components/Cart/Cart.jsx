import React from 'react';
import Preview from '../Preview/Preview';

const Cart = props => {
  const card = props.card;
  let total = 0;
  for (let i = 0; i < card.length; i++) {
    const product = card[i];
    total = total + product.price * product.quantity;
  }
  let shipping = 0;
  if (total > 50) {
    shipping = 0;
  } else {
    shipping = 12.99;
  }
  let tax = Math.round(total / 10);
  return (
    <div>
      <h2 className="text-danger">Oder Summary</h2>
      <p>Iteams odered:{card.length}</p>
      <p>
        <small>Shipping: {shipping}</small>
        <br />
        <small>VAT: {tax}</small>
      </p>
      <p>Total price: {Math.round(total + shipping + tax)}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
