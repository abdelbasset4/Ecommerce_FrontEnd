import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <div className="rounded-sm border border-stroke bg-white p-5 w-full lg:max-w-[50%] mx-auto shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
      </div>
      <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                   New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
      </div>

      <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-white text-start ms-3">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
      </div>
      <Link
              to="#"
              className="block items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
            Save
      </Link>
    </div>
  )
}
