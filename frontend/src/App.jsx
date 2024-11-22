import { useState, useEffect } from "react";
import { getAllProducts } from "./services/productService";
import Product from "./components/product";
import { Button, Grid2 } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await getAllProducts();
    console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>List of Products</h1>
      <Grid2 container spacing={3} sx={{ padding: "20px" }}>
        {products?.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            warranty_years={product.warranty_years}
            type={product.type}
            available={product.available}
          />
        ))}
      </Grid2>
    </div>
  );
}

export default App;
