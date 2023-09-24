import {
  Input,
  Button,
  Typography,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetUserCart from "../../hook/Cart/useGetUserCart";
import useDeleteCart from "../../hook/Cart/useDeleteCart";
import { ToastContainer } from "react-toastify";
import useApplyCoupon from "../../hook/Cart/useApplyCoupon";
import { useEffect } from "react";

export default function Coupon() {
  const [, , totalCartPrice,coupon,afterCouponPrice] = useGetUserCart();
  const  [couponName,onChangeCouponName,handelApplyCoupon]  = useApplyCoupon()
  const  [,,,openClear,handleOpenClear,handelClearCart] = useDeleteCart()
  console.log(coupon);
  useEffect(() => {
    if(coupon) onChangeCouponName(coupon)
  }, [coupon])

console.log(couponName);
  return (
    <>
      <Dialog
        open={openClear}
        handler={handleOpenClear}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>Delete!</DialogHeader>
        <DialogBody divider>
          Do you really want to delete the cart item?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenClear}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-gray-900 text-white"
            onClick={() => handelClearCart()}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <div className="max-w-[24rem] mt-8">
        <div className="relative flex w-full ">
          <Input
            type="text"
            label="Enter your coupon code ...."
            value={couponName}
            onChange={(e)=>onChangeCouponName(e.target.value)}
            className="pr-20 h-9 "
            containerProps={{
              className: "min-w-0 ",
            }}
          />
          <Button
            size="sm"
            onClick={handelApplyCoupon}
            disabled={!couponName}
            className={`!absolute right-1 top-1 rounded ${
              !couponName ? "bg-gray-500 text-white" : "text-white bg-gray-900"
            }`}>
            Apply
          </Button>
        </div>
        <Typography
          className=" bg-white text-gray-900 border border-gray-900 rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
          fullWidth>
          Procced to checkout {totalCartPrice} $
        </Typography>
        {
          afterCouponPrice ? (
            <Typography
          className=" bg-white text-gray-900 border border-gray-900 rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
          fullWidth>
          price after applying coupon {afterCouponPrice} $
        </Typography>
          ):null
        }
        <Link to="/checkout">
          <Button
            className=" bg-gray-900 text-white rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
            fullWidth>
            Checkout
          </Button>
        </Link>
        <Button
        onClick={handleOpenClear}
          className=" bg-gray-900 text-white rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
          fullWidth>
          Clear All
        </Button>
      </div>
      <ToastContainer/>
    </>
  );
}
