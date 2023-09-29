import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrder } from "../../Redux/Slice/Order/orderThunk";
const useGetOneOrder = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [order, setOrders] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneOrder(`/api/v1/orders/${id}`));
      setLoading(false);
    };
    get();
  }, []);

  const resOneOrder = useSelector((state) => state.order.oneOrder);

  useEffect(() => {
    if (loading === false) {
      if (resOneOrder) setOrders(resOneOrder?.data);
    }
  }, [loading]);

  return [order];
};

export default useGetOneOrder;
