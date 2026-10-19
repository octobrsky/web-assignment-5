import React from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 600 }
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Available Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
