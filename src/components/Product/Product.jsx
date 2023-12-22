import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = props => {
  // console.log(props);
  const { img, price, name, seller, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="detailes">
        <h4 className="product-name">
          <Link to={'/product/' + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>only {stock} left in stock- oder soon</small>
        </p>
        {props.showAddToCart && (
          <button
            onClick={() => props.handeladdproduct(props.product)}
            className="main-btn"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            add to card
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
