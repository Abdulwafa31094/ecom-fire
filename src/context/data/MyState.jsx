import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { fireDB } from "../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
} from "firebase/firestore";

import { toast } from "react-toastify";

const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [products, setProducts] = useState([]);
  // const { mode, product, searchkey, filterType, filterPrice } = context;

    useEffect(() => {
      // Make a GET request to an API endpoint
      fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data.products))
        .catch((error) => console.error('Error:', error));
    }, []);

console.log("product", products);

  // orders
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "orders"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      console.log(ordersArray);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };



  // get user details
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false);
      });
      setUser(usersArray);
      console.log(usersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderData();
    getUserData();
  }, []);


  // filters
  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')




  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        order,
        user,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
        products,
        setProducts
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
