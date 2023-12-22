import React from 'react';

const ReviewItem = props => {
  const { name, quantity, key, price } = props.product;
  const reviewItgemStyle = {
    borderBottom: '1px solid lightgray',
    marginBottom: '5px',
    marginLeft: '100px',
    paddingBottom: '5px',
  };
  return (
    <div style={reviewItgemStyle} className="review-item">
      <h3 className="product-name">{name}</h3>
      <p>Quantity:{quantity}</p>
      <p>Price:{price}</p>
      <br />
      <button className="main-btn" onClick={() => props.removeproduct(key)}>
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
