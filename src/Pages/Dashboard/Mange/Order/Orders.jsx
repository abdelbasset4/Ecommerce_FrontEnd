import { NavLink } from "react-router-dom";
import Breadcrumb from "../../../../Components/Dashboard/Breadcrumb";
import Pagination from "../../../../Components/Utility/Pagination";
import useGetUserOrders from "../../../../hook/Order/useGetUserOrders";
import { dateFormat } from "../../../../js/dateFormat";

export default function Orders() {
  const [result, pageCount, orders, getPageNumber] = useGetUserOrders(40);
  return (
    <>
      <Breadcrumb pageName="orders" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[130px] py-4 px-4 font-normal text-base text-black dark:text-white">
                  Order
                </th>
                <th className="min-w-[200px] py-4 px-4 font-normal text-base text-black dark:text-white xl:pl-11">
                  User
                </th>
                <th className="min-w-[130px] py-4 px-4 font-normal text-base text-black dark:text-white">
                  Date
                </th>
                <th className="min-w-[100px] py-4 px-4 font-normal text-base text-black dark:text-white">
                  Paid
                </th>
                <th className="min-w-[100px] py-4 px-4 font-normal text-base text-black dark:text-white">
                  Delivered
                </th>
                <th className="min-w-[100px] py-4 px-4 font-normal text-base text-black dark:text-white">
                  Payment Method
                </th>
                <th className="min-w-[100px] py-4 px-4 font-normal text-base text-black dark:text-white">
                  Total Price
                </th>
                <th className="py-4 px-4 font-normal text-base text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders
                ? orders.map((order, index) => {
                    return (
                      <tr key={index}>
                        <td className="border-b border-[#eee] py-5 px-4  dark:border-strokedark ">
                          <h5 className="font-medium text-black dark:text-white">
                            #{order.orderId}
                          </h5>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark ">
                          <h5 className="font-medium text-black dark:text-white">
                            {order.user.name}
                          </h5>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {dateFormat(order.createdAt)}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          {order.isPaid === true ? (
                            <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                              Paid
                            </p>
                          ) : (
                            <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
                              Unpaid
                            </p>
                          )}
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          {order.isDelivered === true ? (
                            <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                              Deliver
                            </p>
                          ) : (
                            <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
                              Undeliver
                            </p>
                          )}{" "}
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          {order.paymentMethod === "cash" ? (
                            <p className="text-black dark:text-white "> Cash</p>
                          ) : (
                            <p className="text-black dark:text-white">
                              {" "}
                              Online
                            </p>
                          )}
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {order.totalOrderPrice}$
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <div className="flex justify-center">
                            <NavLink to={`/dashboard/order/${order._id}`}>
                              <button className="hover:text-primary">
                                <svg
                                  className="fill-current"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                    fill=""
                                  />
                                  <path
                                    d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                    fill=""
                                  />
                                </svg>
                              </button>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
          {pageCount > 1 ? (
            <Pagination numberPages={pageCount} onPress={getPageNumber} />
          ) : null}
        </div>
      </div>
    </>
  );
}
