import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function AddAdress() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Link
              to="#"
              onClick={handleOpen}
              className="inline-flex items-center justify-center rounded-md border border-black py-4 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Add Adress
      </Link>
      <Dialog open={open} handler={handleOpen} className="overflow-y-scroll h-screen">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Adress Details:
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
            <div className="w-full ">
                        <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                        Adress Name:
                        </label>
                        <input
                        type="text"
                        placeholder="Enter your Adress name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
            </div>
            <div className="w-full ">
                        <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                        Adress Details:
                        </label>
                        <input
                        type="text"
                        placeholder="Enter your Adress Details"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
            </div>
            <div className="w-full ">
                        <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                        Adress Line:
                        </label>
                        <input
                        type="text"
                        placeholder="Enter your Adress Line"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
            </div>
            <div className="w-full ">
                        <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                        Zip Code:
                        </label>
                        <input
                        type="number"
                        placeholder="Enter your Zip Code"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
            </div>
            <div className="w-full ">
                        <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                        City:
                        </label>
                        <input
                        type="text"
                        placeholder="Enter your City"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
            </div>
            <div className="w-full ">
                        <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                        Phone Number:
                        </label>
                        <input
                        type="tel"
                        placeholder="Enter your Phone Number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
            </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Button className="bg-gray-900" onClick={handleOpen}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}