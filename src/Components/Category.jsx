import React, { useEffect, useState } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import "./Category.css"
import styled from "styled-components";

const Category = () => {
  const URL = "https://dummyjson.com/products?limit=100";

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((res) => setProduct(res.products))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div>
      
      <h1 className="text-center text-info">E-commerce shop</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-2 mx-2">
          <div className="col-md-2">
            <button className="btn-warning w-100 mb-4">smartphones</button>
            <button className="btn-warning w-100 mb-4">laptops</button>
            <button className="btn-warning w-100 mb-4">fragrances</button>
            <button className="btn-warning w-100 mb-4">skincare</button>
            <button className="btn-warning w-100 mb-4">groceries</button>
          </div>
          <div className="col-md-10">
            <h3>Category</h3>
            <div className="container">
              <div className="row">
                {product.map((item) => (
                  <div className="col-md-4 mb-4" key={item}>
                    <div className="card">
                      <img
                        src={item.thumbnail}
                        className="img card-img-top"
                        alt="image"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text" >{item.description}</p>
                        <h4>{item.price}</h4>
                        <a href="#" className="btn btn-primary">
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
