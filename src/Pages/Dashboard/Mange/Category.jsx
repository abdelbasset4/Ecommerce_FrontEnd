import { Link } from 'react-router-dom';
import Breadcrumb from '../../../Components/Dashboard/Breadcrumb';
import { useState } from 'react';
import { useDispatch,  } from "react-redux";
import { createCategory } from "../../../Redux/Slice/Category/CategoryThunk";
import { useEffect } from 'react';
import { Spinner } from '@material-tailwind/react';
import { useRef } from 'react';

export default function Category() {
  const inputRef = useRef(null);
  const dispatch = useDispatch()
  const [img,setImg] = useState('')
  const [selectedFile,setSelectedFile] = useState(null)
  const [name,setName] = useState('')
  const [loading,setLoading] = useState(true)
  const [press,setPress] = useState(false)

  const changeImg =(e)=>{
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]))
      setSelectedFile(e.target.files[0])
    }
  }
  const submitData = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", name)
    formData.append("image", selectedFile)
    setLoading(true)
    setPress(true)
    await dispatch(createCategory(formData))
    setLoading(false)
  }
  useEffect(
    ()=>{
      if(loading === false){
        setName('')
        setImg('')
        console.log('تم الانتهاء')
        setSelectedFile(null)
        setLoading(true)
        setPress(false)
        inputRef.current.value = ''
      }
    }
    ,[loading])
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
              onChange={(e)=>setName(e.target.value)}
              placeholder="Category Name"
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
    </>
  )
}
