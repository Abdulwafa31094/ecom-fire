import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex mt-2 mb-8 justify-center">
        <Link to="/allproducts">
          <button className=" bg-blue-500 hover:bg-blue-600 hover:text-xl px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
