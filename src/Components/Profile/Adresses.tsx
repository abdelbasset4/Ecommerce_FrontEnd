import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Adresses() {
  return (
    <div className="rounded-sm border border-stroke bg-white p-2 lg:p-5 w-full lg:max-w-[50%] mx-auto shadow-default dark:border-strokedark dark:bg-boxdark mb-3">

        <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                      Adress Name:
                    </label>
                    <Typography variant="h6" className="text-start ms-4">My Home</Typography>
        </div>
        <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                      Adress Details:
                    </label>
                    <Typography variant="h6" className="text-start ms-4">City hello talk</Typography>
        </div>
        <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                      Adress Line:
                    </label>
                    <Typography variant="h6" className="text-start ms-4">City hello talk 14-8f</Typography>
        </div>
        <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                      Zip Code:
                    </label>
                    <Typography variant="h6" className="text-start ms-4">03000</Typography>
        </div>
        <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                      City:
                    </label>
                    <Typography variant="h6" className="text-start ms-4">USA</Typography>
        </div>
        <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                      Phone number:
                    </label>
                    <Typography variant="h6" className="text-start ms-4">0685471154</Typography>
        </div>

    </div>
  )
}
