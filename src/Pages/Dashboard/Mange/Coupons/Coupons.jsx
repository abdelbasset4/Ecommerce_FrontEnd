import { Alert } from "@material-tailwind/react"
import CouponsTableRow from "../../../../Components/Admin/CouponsTableRow"
import Breadcrumb from "../../../../Components/Dashboard/Breadcrumb"
import useGetAllCoupons from "../../../../hook/Coupon/useGetAllCoupons"
import Pagination from "../../../../Components/Utility/Pagination"

const Coupons = () => {
  const [coupons,pageCount,getPageNumber] = useGetAllCoupons(10)
  console.log(coupons);
  return (
    <>
    <Breadcrumb pageName="Coupons" />
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between gap-8 items-center">
      <h4 className="text-xl font-semibold text-black dark:text-white">
        Coupons
      </h4>
      <div className="grow">
        <input
          type="text"
          placeholder="Search Coupon"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      {pageCount > 1 ? (
        <Pagination numberPages={pageCount} onPress={getPageNumber} />
      ) : null}
    </div>

    <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
      <div className="col-span-2 hidden items-center sm:flex">
        <p className="font-medium">Coupon Name</p>
      </div>
      <div className="col-span-2 hidden items-center sm:flex">
        <p className="font-medium">Expire Date</p>
      </div>
      <div className="col-span-2 hidden items-center sm:flex">
        <p className="font-medium">Discount</p>
      </div>
      <div className="col-span-1 flex items-center">
        <p className="font-medium">Actions</p>
      </div>
    </div>
    {
      coupons?.data?.length >0 ?(
        coupons.data.map((coupon)=>{
         // eslint-disable-next-line react/jsx-key
         return ( <CouponsTableRow key={coupon._id} coupon={coupon}/>)
        })
      ):( <Alert>there are no coupon found.</Alert>)
    }
  </div>
    </>
  )
}

export default Coupons