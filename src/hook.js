// hook para proveer la lista de productos

import { useEffect, useState } from "react";
import { getAllProducts, getProduct } from "./api";

export function useProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProduct(data))
      .catch((error) => console.log("[useProduct]", error));
  }, []);

  return { product };
}

//hook para obtener informacion del producto

export function useProducts(id) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data))
      .catch((error) => console.log("[useProduct]", error));
  }, [id]);

  return { product };
}
