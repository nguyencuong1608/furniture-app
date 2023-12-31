import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar, Footer, ScrollUpButton } from "./Components";
import { Home, About, Products, Error, User } from "./Pages";
import { getAllProducts } from "./Slices/AllProductsSlice";
import { loadProducts } from "./Slices/filterProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import { ToastContainer, toast } from "react-toastify";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import AnimatedRoutes from "./Components/AnimatedRoutes";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_DOMAIN_AUTH0_CLIENT_ID;

function App() {
  const { allProducts, featured_products, isLoading } = useSelector(
    (store) => store.allProducts
  );
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  const handleUserCart = (user) => {
    if (user) {
      dispatch(
        getCartLocalStorage(JSON.parse(localStorage.getItem(user.email)))
      );
    }
  };

  useEffect(() => {
    handleUserCart(user);
  }, [user]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    dispatch(loadProducts({ allProducts }));
  }, [allProducts]);

  return (
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Navbar />
        <AnimatedRoutes />
        <ScrollUpButton />
        <Footer />
        <ToastContainer
          position="bottom-right"
          toastStyle={{
            backgroundColor: "f4f4f4",
            // boxShadow:
            //   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
          }}
        />
      </Auth0Provider>
    </Router>
  );
}

export default App;
