import { Checkbox, Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function CategoryCheckbox({title,searchList}) {
  return (
    <div className="mt-4 flex flex-col border-t border-gray-300">
        <Typography
            variant="h5"
            color="blue-gray"
            className="font-lg pt-6"
        >
            {title}
        </Typography>
        {
            // eslint-disable-next-line react/prop-types
            searchList.length >0 ? (
                // eslint-disable-next-line react/prop-types
                searchList.map((item)=>{
                    // eslint-disable-next-line react/jsx-key
                    return <Checkbox label={item} className="checked:bg-gray-900 checked:text-white checked:border-gray-900" labelProps={{className: "text-sm text-gray-900"}} />
              
                 })
              ):(<div>There are no data</div>)
        }
    </div>
  )
}
