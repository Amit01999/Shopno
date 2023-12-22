import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdeatils = () => {
  const productKey = useParams();
  const pkey = productKey.productKey;
  const product = fakeData;
  const selectProduct = product.find(pd => pd.key === pkey);
  console.log(selectProduct);
  return (
    <div>
      <h2>{pkey} Product deatils comming soooooooooon</h2>
      <Product showAddToCart={false} product={selectProduct}></Product>
    </div>
  );
};

export default Productdeatils;
