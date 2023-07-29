import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, ScrollUpButton } from "./Components";
import { Home, About, Products, Error } from "./Pages";
import { getAllProducts } from "./Slices/AllProductsSlice";
import { loadProducts } from "./Slices/filterProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { allProducts, featured_products, isLoading } = useSelector(
    (store) => store.allProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    dispatch(loadProducts({ allProducts }));
  }, [allProducts]);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollUpButton />
      <Footer />
      <ToastContainer
        position="bottom-right"
        toastStyle={{
          backgroundColor: "f4f4f4",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
        }}
      />
    </Router>
  );
}

export default App;
