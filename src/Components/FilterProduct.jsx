import React, { useEffect, useState } from 'react'
import { Productss } from "./Productss";
import { Container, Row, Col, Button } from "react-bootstrap";
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

      const [categorytype, setcategorytype] = useState();

  const [categoryarray] = useState([]);

  // console.log(product);
  useEffect(() => butns());

  const butns = () => {
    product.map((btn) =>
      categoryarray.includes(btn.category)
        ? null
        : categoryarray.push(btn.category)
    );
    console.log(categoryarray);
  };

  return (
    <div fluid className="row" >
      <div className='col-md-2'>
      <div className="category-buttons">
        
          <h3>Category</h3>
          {categoryarray.map((itmebtn) => (
            <div className='row' key={itmebtn}>
              <button
                className="m-1 p-1 categorybutton"
                onClick={() => setcategorytype(itmebtn)}
              >
                {itmebtn}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-10">
        <div className='productwindo'>
          <h2>Shopping</h2>
          {product
            .filter(
              (i) => i.category === (categorytype ? categorytype : i.category)
            )
            .map((item) => {
              return (
                <div key={item.id}>
                  <div className='col-md-9'>
                    <Productss item={item} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FilterProduct