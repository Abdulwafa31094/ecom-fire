import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/MyState";
import ProductInfo from "./pages/productInfo/ProductInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "./pages/allProducts/AllProducts";

const App = () => {
  return (
    <MyState>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route
            path="/order"
            element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
};

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "abdulwafa31094@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
