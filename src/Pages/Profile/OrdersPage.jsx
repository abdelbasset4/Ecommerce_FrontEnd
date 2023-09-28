import { baseURL } from "../../API/mainBaseURL";
import NavBar from "../../Components/Utility/NavBar";
import Pagination from "../../Components/Utility/Pagination";
import useGetUserOrders from "../../hook/Checkout/useGetUserOrders";
export default function OrdersPage() {
  const [result, pageCount, orders, getPageNumber] = useGetUserOrders(4);
  return (
    <div>
      <NavBar />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            My Orders :{result} Orders
          </h4>
        </div>

        <div className=" border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className=" flex items-center">
            <p className="font-medium">Orders List</p>
          </div>
        </div>

        <div className=" border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          {orders ? (
            orders.map((order) => {
              return (
                <div key={order._id} className="border-2 border-gray-300  my-3 rounded-xl shadow-md">
                  <p className="p-4">Order n = {order._id}</p>
                  <div>
                    {order.cartItems.map((item, index) => {
                      return (
                        <div key={index} className=" border-b border-gray-400 p-4">
                          <div className="flex flex-col gap-3 sm:flex-row lg:items-center">
                            <div className="h-16 w-19 rounded-md">
                              <img
                                className="h-full w-full"
                                src={`${baseURL}/products/${item.product.imageCover}`}
                                alt=""
                              />
                            </div>

                           <div className="flex flex-col gap-3">
                           <p className="font-medium text-lg">{item.product.title}</p>
                           <p className="font-medium ">Quantity: {item.quantity} Items</p>
                           <p className="font-medium">Price : ${item.price}</p>
                           <div className="w-6 h-6 rounded-full" style={{backgroundColor:`${item.color}`}}></div>
                           </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-blue-gray-900 p-4 text-white rounded-b-lg">
                  <div className="flex flex-col lg:flex-row gap-3 ">
                    <p>
                      Delivered:
                      {order.isDelivered === true ? <span className="font-semibold text-blue-900"> Done</span> : <span className="font-semibold text-red-700"> Not Done</span>}
                    </p>
                    <p>Paid:{order.isPaid === true ? <span className="font-semibold text-blue-900"> Done</span> :  <span className="font-semibold text-red-700"> Not Done</span>}</p>
                    <p>
                      Payment method: 
                      {order.paymentMethod === "cash" ?  <span className="font-semibold text-blue-900"> Cash</span> :  <span className="font-semibold text-blue-900"> Online</span>}
                    </p>
                  </div>
                  <div className="mt-2">Total order price :${order.totalOrderPrice}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>You dont have orders</h1>
          )}

        </div>
        {
          pageCount >1 ?(<Pagination numberPages={pageCount} onPress={getPageNumber} />):null
        }
      </div>
    </div>
  );
}
