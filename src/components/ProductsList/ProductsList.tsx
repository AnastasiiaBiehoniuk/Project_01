// rfc rafc

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const productsRes = await res.json();
    setProducts(productsRes);
  }

  return (
    <div>
      <h2>Products list</h2>
      <ul>
        {products.map((p) => (
          <li key={"product" + p.id}>
            <h3>{p.title}</h3>
            <img src={p.images[0]} alt="product" />
            <span>{p.price} $</span>
            <Link to={`/products/${p.id}`}>To product</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};