import { Link } from 'react-router-dom';
import Breadcrumb from '../../../Components/Dashboard/Breadcrumb';


import useAddSubCategory from '../../../hook/subCategory/useAddSubCategory';
import { Spinner } from '@material-tailwind/react';
import { ToastContainer } from 'react-toastify';
export default function SubCategory() {
  const [name,categories, loading, press, changeName,changeId, submitData] = useAddSubCategory()
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
          <div className='mt-4'>
                <label className="mb-3 block text-black dark:text-white">
                  Category:
                </label>
                <select name='category' className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input" onChange={changeId}>
                  <option value="0">Choose category</option>
                  {
                    categories.data ?(
                      categories.data.map(category=>{
                        
                        return (<option value={category._id} key={category._id}>{category.name}</option>)
                      })
                    ):null
                  }
                </select> 
          </div>
          <Link
              onClick={submitData}
              to="#"
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
