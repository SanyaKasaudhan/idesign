import React, { useEffect, useState } from 'react'
import Item from './Item';
import {ProductList} from './ProductList';

const Product = () => {
    const [product, setproduct] = useState([]);

    useEffect(() => {
      fetch("https://dummyjson.com/products?limit=100")
        .then((response) => response.json())
        .then((resp) => setproduct(resp.products))
        .catch((err) => console.log(err));
    }, []);
    // console.log(product);
  
    return (
      <div>
        <Item product={product} />
      </div>
    );
}

export default Product