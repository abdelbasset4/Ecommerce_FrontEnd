import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserOrder } from "../../Redux/Slice/Order/orderThunk";
const useGetUserOrders = (limit) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllUserOrder(`/api/v1/orders?limit=${limit}`));
      setLoading(false);
    };
    get()
  }, []);


  const resAllOrder = useSelector((state) => state.order.userOrders);
  let pageCount = 0;
  if (resAllOrder.paginationResults) {
    pageCount = resAllOrder.paginationResults.numberPages;
  }
  const getPageNumber = async (page) => {
    setLoading(true);
   await dispatch(getAllUserOrder(`/api/v1/orders?page=${page}&limit=${limit}`));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (resAllOrder.result) setResult(resAllOrder.result);
      if (resAllOrder.paginationResults)
      if (resAllOrder.data) setOrders(resAllOrder.data);
    }
  }, [loading]);

  return [result, pageCount, orders, getPageNumber]
};

export default useGetUserOrders;
