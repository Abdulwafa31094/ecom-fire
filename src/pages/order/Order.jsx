import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import MyContext from "../../context/data/MyContext";

function Order() {
  const userId = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(MyContext);
  const { mode, loading, order } = context;
  // console.log("order", order);
  // const test = order.filter((obj) => obj.userid === userId);
  // console.log('test',test);

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <>
          <div className=" h-full pt-10">
            {order
              .filter((obj) => obj.userid === userId)
              .map((order, idx) => {
                // order.cartItems.map()
                return (
                  <div
                    key={idx}
                    className="mx-auto flex flex-col max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                  >
                    {order?.cartItems?.map((item, index) => {
                      console.log("item", item);
                      return (
                        <div key={index} className="rounded-lg md:w-2/3">
                          <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            style={{
                              backgroundColor: mode === "dark" ? "#282c34" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <img
                              src={item.thumbnail}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                <h2
                                  className="text-lg font-bold text-gray-900"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.title}
                                </h2>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.description}
                                </p>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <h2 className=" text-center tex-2xl text-white">Not Order</h2>
      )}
    </Layout>
  );
}

export default Order;
