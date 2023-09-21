import { Link } from "react-router-dom";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import "filepond/dist/filepond.min.css";
import { baseURL } from "../../API/mainBaseURL";
import { Typography } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import useUpdateLoggedUserInfo from "../../hook/Auth/useUpdateLoggedUserInfo";
import { ToastContainer } from "react-toastify";
import { decodeToken } from "../../js/decodeToken";
export default function AccountDetails({userDetails}) {

  const [
    open,
    handleOpen,
    name,
    onChangeName,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    file,
    setFile,
    hundelSubmit,
  ] = useUpdateLoggedUserInfo(userDetails);
  const activeUser = decodeToken()
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogBody divider>
          <div>
            <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
              Full name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div>
            <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
              Email
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={email}
              onChange={onChangeEmail}
              disabled={activeUser.authType ==="gmail" ? true : false}
            />
          </div>
          <div>
            <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
              Phone
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={phone}
              onChange={onChangePhone}
            />
          </div>
          <div>
            <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
              Profile Image{" "}
            </label>{" "}
            <FilePond
              files={file}
              onupdatefiles={setFile}
              allowMultiple={true}
              maxFiles={1}
              name="files"
              labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
            />
          </div>
        </DialogBody>
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
            onClick={() => hundelSubmit()}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <div className="rounded-sm border border-stroke bg-white p-2 lg:p-5 w-full lg:max-w-[50%] mx-auto shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full ">
            <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
              Full name
            </label>
            <Typography className="font-semibold text-base text-start">
              {userDetails?.data?.name}
            </Typography>
          </div>
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
            Email <span className="text-meta-1">*</span>
          </label>
          <Typography className="font-semibold text-base text-start">
            {userDetails?.data?.email}
          </Typography>
        </div>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
            Phone
          </label>
          <Typography className="font-semibold text-base text-start">
            {userDetails?.data?.phone ||"you dont have phone number"}
          </Typography>
        </div>

        <Link
          to="#"
          onClick={handleOpen}
          className="block items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          Update user info
        </Link>
      </div>
      <ToastContainer />
    </>
  );
}
