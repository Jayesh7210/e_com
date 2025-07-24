import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { getAllProducts } from "../../services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
