import { Link, useParams } from "react-router-dom";
import useUpdateCoupon from "../../../../hook/Coupon/useUpdateCoupon";
import Breadcrumb from "../../../../Components/Dashboard/Breadcrumb";
import { ToastContainer } from "react-toastify";
const EditCoupon = () => {
  const { id } = useParams();
  const  [
    name,
    changeName,
    expire,
    changeDate,
    discount,
    changeDiscount,
    hundelSubmit,
  ] = useUpdateCoupon(id)
  return (
    <>
      <Breadcrumb pageName="Edit Coupon" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6">
        <div>
          <label className="mb-3 block text-black dark:text-white">
            Coupon Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={changeName}
            placeholder="Coupon Name"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="my-4">
          <label className="mb-3 block text-black dark:text-white">
            Coupon Expire Date:
          </label>
          <input
            type="date"
            value={expire}
            onChange={changeDate}
            placeholder="Coupon Date"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label className="mb-3 block text-black dark:text-white">
            Coupon Value:
          </label>
          <input
            type="number"
            value={discount}
            onChange={changeDiscount}
            placeholder="Coupon Value"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>

        <Link
          to="#"
          onClick={hundelSubmit}
          className="inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mt-4">
          Update
        </Link>
      </div>

      <ToastContainer />
    </>
  );
}

export default EditCoupon