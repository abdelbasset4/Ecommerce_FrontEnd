import { Link } from 'react-router-dom';
import Breadcrumb from '../../../Components/Dashboard/Breadcrumb';
import useAddBrand from '../../../hook/Brand/useAddBrand';
import { Spinner } from '@material-tailwind/react';
import { ToastContainer } from 'react-toastify';
export default function Brand() {
  const [name,img,inputRef,loading,press,changeImg,changeName,submitData] = useAddBrand()
  return (
    <>
      <Breadcrumb pageName="Brand" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6">
      <div>
            <label className="mb-3 block text-black dark:text-white">
              Brand Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={changeName}
              placeholder="Brand Name"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div className='mt-4'>
                <label className="mb-3 block text-black dark:text-white">
                  Image:
                </label>
                <input
                  type="file"
                  ref={inputRef}
                  onChange={changeImg}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
          </div>
          <div className='my-4 w-25 h-25 relative'>
            <img src={img} alt="" className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <Link
              to="#"
              onClick={submitData}
              className="inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mt-4"
            >
              Add
          </Link>
        </div>
        {
          press ? loading ? (<Spinner className="h-16 w-16 text-blue-500/10" />):(<p>finish</p>):null
        }  
        <ToastContainer />
    </>
  )
}
