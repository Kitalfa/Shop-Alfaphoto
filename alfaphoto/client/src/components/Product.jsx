import React from 'react';
//link
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  console.log(product.attributes.image.data[0].attributes.url);
  return (
    <Link>
      <div>
        <div>
          <img
            src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Product;
