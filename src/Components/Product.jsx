import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

const Product = () => {
    const[product,setProduct] =useState([]);

    useEffect(()=>
    {
        fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then((response) =>setProduct(response.products))
        .catch((err)=> console.log(err))
    },[]
    
    
    )
    console.log(product);
    

  return (
    <div>
        <ProductList props={product}/>
        
    </div>
  )
}

export default Product