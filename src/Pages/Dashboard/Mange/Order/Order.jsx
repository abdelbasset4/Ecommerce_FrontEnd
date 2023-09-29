import { useParams } from "react-router-dom";
import useGetOneOrder from "../../../../hook/Order/useGetOneOrder";
import { baseURL } from "../../../../API/mainBaseURL";
import useChangeOrderStatus from "../../../../hook/Order/useChangeOrderStatus";
import { ToastContainer } from "react-toastify";

const Order = () => {
  const { id } = useParams();
  const [order] = useGetOneOrder(id);
  const [onChangeDeliver,onChangePaid,changeDeliverOrder,changePayOrder] = useChangeOrderStatus(id)
  return (
    <div className="border-2 border-gray-300  my-3 rounded-md shadow-md">
      <p className="p-4">Order number : #{order.orderId}</p>
      <div>
        {order?.cartItems?.map((item, index) => {
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
                  <p className="font-medium ">
                    Quantity: {item.quantity} Items
                  </p>
                  <p className="font-medium">Price : ${item.price}</p>
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{
                      backgroundColor: `${item.color}`,
                    }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t p-3">
        <p>
          User :{" "}
          <span className="font-medium text-lg">{order?.user?.name}</span>
        </p>
        <p>
          Email :{" "}
          <span className="font-medium text-lg">{order?.user?.email}</span>
        </p>
        <p>
          Phone :{" "}
          <span className="font-medium text-lg">{order?.user?.phone}</span>
        </p>
      </div>
      <div className="border-t p-3">
        <p>
          Shipping adress :{" "}
          <span className="font-medium text-lg">
            {order?.shippingAdress?.details}
          </span>
        </p>
        <p>
          City :{" "}
          <span className="font-medium text-lg">
            {order?.shippingAdress?.city}
          </span>
        </p>
        <p>
          PostalCode :{" "}
          <span className="font-medium text-lg">
            {order?.shippingAdress?.postalCode}
          </span>
        </p>
      </div>
      <div className="bg-blue-gray-900 p-4 text-white rounded-b-lg">
        <div className="flex flex-col lg:flex-row gap-3 ">
          <p>
            Delivered:
            {order.isDelivered === true ? (
              <span className="font-semibold text-blue-900"> Done</span>
            ) : (
              <span className="font-semibold text-red-700"> Not Done</span>
            )}
          </p>
          <p>
            Paid:
            {order.isPaid === true ? (
              <span className="font-semibold text-blue-900"> Done</span>
            ) : (
              <span className="font-semibold text-red-700"> Not Done</span>
            )}
          </p>
          <p>
            Payment method:
            {order.paymentMethod === "cash" ? (
              <span className="font-semibold text-blue-900"> Cash</span>
            ) : (
              <span className="font-semibold text-blue-900"> Online</span>
            )}
          </p>
        </div>
        <div className="mt-2">Total order price :${order.totalOrderPrice}</div>
      </div>

      <div className="flex gap-5 my-4 items-center pl-4">
        <div className="flex gap-2 items-center">
          <p>Deliver Status : </p>
          <select name="" id="deliver-id" className="py-2 px-3 text-black rounded-md text-base" onChange={onChangeDeliver} disabled={order.isDelivered}>
            <option  value="0">Change :</option>
            <option  value="false">Not Deliver</option>
            <option value="true">Deliver</option>
          </select>
          <button onClick={changeDeliverOrder} className="inline-flex items-center justify-center rounded-md bg-black py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 ">
            Save
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <p>Pay Status : </p>
          <select name="" id="pay-id" className="py-2 px-3 text-black rounded-md text-base" onChange={onChangePaid} disabled={order.isPaid} >
            <option value="0">Change :</option>
            <option value="false">Not Pay</option>
            <option value="true">Pay</option>
          </select>
          <button onClick={changePayOrder} className="inline-flex items-center justify-center rounded-md bg-black py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 ">
            Save
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Order;
