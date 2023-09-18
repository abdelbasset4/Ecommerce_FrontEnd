import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import useDeleteAdress from "../../hook/Adress/useDeleteAdress";
import useUpdateAdress from "../../hook/Adress/useUpdateAdress";
export default function Adresses({ adress }) {
  const [open, handleOpen, handelDeleteAdress] = useDeleteAdress();
  const [
    openUpdate,
    handleOpenUpdate,
    alias,
    changeName,
    details,
    changeDetails,
    city,
    changeCity,
    postalCode,
    changeZipCode,
    phone,
    changePhone,
    hundelSubmit,
  ] = useUpdateAdress(adress);
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
        <DialogBody divider>Do you really want to delete the item?</DialogBody>
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
            onClick={() => handelDeleteAdress(adress._id)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog
        open={openUpdate}
        handler={handleOpenUpdate}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>Update!</DialogHeader>
        <DialogBody divider>
          <div className="w-full ">
            <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
              Adress Name:
            </label>
            <input
              type="text"
              value={alias}
              onChange={changeName}
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
              value={details}
              onChange={changeDetails}
              placeholder="Enter your Adress Details"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div className="w-full ">
            <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
              Zip Code:
            </label>
            <input
              type="number"
              value={postalCode}
              onChange={changeZipCode}
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
              value={city}
              onChange={changeCity}
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
              value={phone}
              onChange={changePhone}
              placeholder="Enter your Phone Number"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenUpdate}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-gray-900 text-white"
            onClick={() => hundelSubmit(adress._id)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <div className="rounded-sm border border-stroke bg-white p-2 lg:p-5 w-full lg:max-w-[50%] mx-auto shadow-default dark:border-strokedark dark:bg-boxdark mb-3 relative">
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
            Adress Name:
          </label>
          <Typography variant="h6" className="text-start ms-4">
            {adress.alias}
          </Typography>
        </div>
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
            Adress Details:
          </label>
          <Typography variant="h6" className="text-start ms-4">
            {adress.details}
          </Typography>
        </div>

        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
            Zip Code:
          </label>
          <Typography variant="h6" className="text-start ms-4">
            {adress.postalCode}
          </Typography>
        </div>
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
            City:
          </label>
          <Typography variant="h6" className="text-start ms-4">
            {adress.city}
          </Typography>
        </div>
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
            Phone number:
          </label>
          <Typography variant="h6" className="text-start ms-4">
            {adress.phone}
          </Typography>
        </div>
        <div className="absolute right-2 top-2 cursor-pointer flex gap-2">
          <GrUpdate onClick={handleOpenUpdate} size={"1rem"} />
          <AiOutlineDelete onClick={handleOpen} size={"1.2rem"} />
        </div>
      </div>
    </>
  );
}
