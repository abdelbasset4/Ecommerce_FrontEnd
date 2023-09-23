import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import Counter from "../Utility/Counter";
import { AiFillCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { baseURL } from "../../API/mainBaseURL";
import useDeleteCart from "../../hook/Cart/useDeleteCart";
import { ToastContainer } from "react-toastify";
export default function CartItem({ product }) {
  const [open,handleOpen,handelDeleteCartItem] = useDeleteCart()
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>Delete!</DialogHeader>
        <DialogBody divider>Do you really want to delete the cart item?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-gray-900 text-white"
            onClick={() => handelDeleteCartItem(product._id)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Card className="flex-col lg:flex-row w-full max-w-[40rem]  mb-4">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-full lg:w-2/5 shrink-0 m-0 rounded-md relative group cursor-pointer">
          <img
            src={`${baseURL}/products/${product.product.imageCover}`}
            alt={`${product.product.title}`}
            className="w-full h-full object-cover "
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-30  bg-gray-100">
            <AiFillCloseCircle size={"2rem"} color="#333A48" />
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {`${product.product.title}`}
          </Typography>
          <Typography color="gray" className="font-normal ">
            {`${product.price}`}$
          </Typography>
          <div
            className="w-8 h-8 rounded-full my-4"
            style={{ backgroundColor: `${product.color}` }}></div>
          <div className="flex justify-between items-center">
            <Counter quantity={`${product.quantity}`} />
            <Typography variant="h5" className="font-normal text-black">
              {product.quantity * product.price}$
            </Typography>
          </div>
        </CardBody>
        <div className="absolute right-2 top-2 cursor-pointer">
          <AiOutlineDelete onClick={handleOpen} size={"1.2rem"} />
        </div>
      </Card>
      <ToastContainer/>
    </>
  );
}
