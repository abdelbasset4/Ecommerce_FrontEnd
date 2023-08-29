import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../../../Components/Dashboard/Breadcrumb";
import { ToastContainer } from "react-toastify";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import "filepond/dist/filepond.min.css";
import useUpdateSubCategory from "../../../../hook/subCategory/useUpdateSubCategory";
const EditSubCategory = () => {
  const {id} = useParams()
  const [name,categoryId,categories,files,changeName,changeId,setFiles,hundelSubmit] =
    useUpdateSubCategory(id);
    console.log(categoryId);
    console.log(categories);
  return (
    <>
      <Breadcrumb pageName="SubCategory" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6">
        <div>
          <label className="mb-3 block text-black dark:text-white">
            SubCategory Name:
          </label>
          <input
            value={name}
            onChange={changeName}
            type="text"
            placeholder="SubCategory Name"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="mt-4">
          <label className="mb-3 block text-black dark:text-white">
            Category:
          </label>
          <select
          value={categoryId}
            name="category"
            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
            onChange={changeId}>
            <option value="0">Choose category</option>
            {categories.data
              ? categories.data.map((category) => {
                  return (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  );
                })
              : null}
          </select>
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
        <Link
          onClick={hundelSubmit}
          to="#"
          className="inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mt-4">
          Update
        </Link>
      </div>
     
      <ToastContainer />
    </>
  );
}

export default EditSubCategory