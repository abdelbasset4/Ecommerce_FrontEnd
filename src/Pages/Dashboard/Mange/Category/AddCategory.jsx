import { Link } from "react-router-dom";
import Breadcrumb from "../../../../Components/Dashboard/Breadcrumb";
import { ToastContainer } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
import useAddCategory from "../../../../hook/category/useAddCategory";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import "filepond/dist/filepond.min.css";
export default function Category() {
  const [name, loading, press, changeName, submitData, files, setFiles] =
    useAddCategory();
  return (
    <>
      <Breadcrumb pageName="Category" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6">
        <div>
          <label className="mb-3 block text-black dark:text-white">
            Category Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => changeName(e)}
            placeholder="Category Name"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="mt-4">
          <label className="mb-3 block text-black dark:text-white">
            Image:
          </label>
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={1}
            name="files"
            labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
          />
        </div>
        <div className="my-4 w-25 h-25 relative"></div>
        <Link
          onClick={submitData}
          to="#"
          className="inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mt-4">
          Add
        </Link>
      </div>
      {press ? (
        loading ? (
          <Spinner className="h-16 w-16 text-blue-500/10" />
        ) : (
          <p>finish</p>
        )
      ) : null}
      <ToastContainer />
    </>
  );
}
