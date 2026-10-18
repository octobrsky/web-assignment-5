import React from "react";
import Card from "./Card.jsx";

export default function Product({ title, price }) {
  return (
    <Card>
      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
      <p style={{ margin: 0, color: "#2563eb", fontWeight: "bold" }}>
        Price: ${price}
      </p>
    </Card>
  );
}
