import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home, About, Products, Error, User } from "../Pages";
import SingleProduct from "../Pages/SingleProduct";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../Pages/Cart";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
