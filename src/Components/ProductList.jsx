import React from 'react'

import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProductList = (product) => {
//     console.log("product",product)
//     var data = Array.from(product);
//    // var result = data.map(person => ({ value: person.id, text: person.description }));
// console.log("data",data)


//     //console.log("products", product.props);
//   return (
//     <div>
// {/* 
// {product.product.map((prod) => (
//           <div  key={prod.id}  xs={12} sm={6} md={4} lg={3}>
//             {prod.title}
//           </div>
//         ))}; */}

// {/* {product.product
            
//             .map((item) => {
//               return (
//                 <div key={item.id}>
                  
//                    <div>{item.title}</div>
                  
//                 </div>
//               );
//             })} */}

//         {
//         product.products.map((item, index) =>
//         <div key={item.id}>
//             {item.title}
//         </div>)
// }

//         {/* {product
            
//             .map((item) => {
//               return (
//                 <div key={item.id}>
//                   <div>
//                     {item.title}
//                   </div>
//                 </div>
//               );
//             })} */}

//     </div>
//   )

const [categorytype, setcategorytype] = useState();

  const [categoryarray] = useState([]);

  // console.log(product);
  useEffect(() => butns());

  const butns = () => {
    product.product.map((btn) =>
      categoryarray.includes(btn.category)
        ? null
        : categoryarray.push(btn.category)
    );
    console.log(categoryarray);
  };

  return (
    <Container fluid className="layoutforbuttoncard">
      <div className="category-buttons">
        <Col>
          <h3>Category</h3>
          {categoryarray.map((itmebtn) => (
            <Row key={itmebtn}>
              <button
                className="m-1 p-1 categorybutton"
                onClick={() => setcategorytype(itmebtn)}
              >
                {itmebtn}
              </button>
            </Row>
          ))}
        </Col>
      </div>
      <div className="productwindo">
        <Row>
          <h2>Shopping</h2>
          {product
            .filter(
              (i) => i.category === (categorytype ? categorytype : i.category)
            )
            .map((item) => {
              return (
                <div key={item.id}>
                  {item.title}
                  {item.description}
                </div>
              );
            })}
        </Row>
      </div>
    </Container>
  );
}

export default ProductList