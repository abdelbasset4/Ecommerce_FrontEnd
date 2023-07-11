import { Checkbox } from "@material-tailwind/react";



export default function ColorsSearch() {
  return (
    <div className="mt-4 flex flex-col border-t border-gray-300">
    
        <Checkbox label={<div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-black"></div><div>Black</div></div>} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
        <Checkbox label={<div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-blue-900"></div><div>Blue</div></div>} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
        <Checkbox label={<div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-[#2b3618]"></div><div>Olive</div></div>} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
        <Checkbox label={<div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-red-900"></div><div>Maroon</div></div>} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
        <Checkbox label={<div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-brown-900"></div><div>Brown</div></div>} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
        <Checkbox label={<div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-white border border-gray-500"></div><div>White</div></div>} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
        <Checkbox label={<div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-gray-800"></div><div>Gray</div></div>} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
    
    </div>
  )
}
