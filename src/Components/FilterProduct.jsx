import React, { useEffect, useState } from 'react'

const FilterProduct = () => {

    const url='https://dummyjson.com/products?limit=100';

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((res) => setProduct(res.products))
          .catch((err) => console.log(err));
      }, []);

      //const [categorytype, setcategorytype] = useState();

      const [categoryarray] = useState([]);
    
      // console.log(product);
      useEffect(() => butns());
    
      const butns = () => {
        product.map((btn) =>
          categoryarray.includes(btn.product.category)
            ? null
            : categoryarray.push(btn.product.category)
        );
        console.log(categoryarray);
      };
    

  return (
    <div>

    </div>
  )
}

export default FilterProduct