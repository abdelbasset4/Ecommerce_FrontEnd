import {
  Input,
  Typography,
} from "@material-tailwind/react";
import useSideBarFilter from "../../hook/Search/useSideBarFilter";


// eslint-disable-next-line react/prop-types
function PriceSideFilter() {
  const [,,,priceFrom,priceTo] = useSideBarFilter()
  let localFrom = localStorage.getItem("priceFrom")
  let localTo = localStorage.getItem("priceTo")
  return (
    //  <List>
    //  <Typography
    //           variant="h5"
    //           color="blue-gray"
    //           className="font-lg pt-6"
    //       >
    //           Price
    //       </Typography>
    //      {
    //       priceList.map((list,index)=>{
    //           // eslint-disable-next-line react/jsx-key
    //           return (<ListItem className="p-0">
    //           <label
    //             htmlFor={index}
    //             className="flex w-full cursor-pointer items-center px-3 py-2"
    //           >
    //             <ListItemPrefix className="mr-3">
    //               <Checkbox
    //                 value={list}
    //                 onChange={onChangeChecked}
    //                 id={index}
    //                 ripple={false}
    //                 color="blue-gray"
    //                 className="hover:before:opacity-0"
    //                 containerProps={{
    //                   className: "p-0",
    //                 }}
    //               />
    //             </ListItemPrefix>
    //             <Typography color="blue-gray" className="font-medium">
    //               {list}
    //             </Typography>
    //           </label>
    //         </ListItem>)
    //       })
    //      }
    //      <div>

    //      </div>
    //  </List>
    <div>
      <div className="mt-4">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-4 font-medium">
          Price From:
        </Typography>
        <Input type="number" label="Price From" value={localFrom} onChange={priceFrom}/>
      </div>
      <div className="mt-4">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-4 font-medium">
          Price To:
        </Typography>
        <Input type="number" label="Price To" value={localTo} onChange={priceTo}/>
      </div>
    </div>
  );
}

export default PriceSideFilter;
