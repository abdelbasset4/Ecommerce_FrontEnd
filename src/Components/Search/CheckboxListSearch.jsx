import { Checkbox, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function CategoryCheckbox({title,searchList,onChangeChecked}) {
  return (
    <div className="mt-4 flex flex-col border-t border-gray-300">
        <Typography
            variant="h5"
            color="blue-gray"
            className="font-lg pt-6"
        >
            {title}
        </Typography>
        <List>
        {
            // eslint-disable-next-line react/prop-types
            searchList.length >0 ? (
                
                // eslint-disable-next-line react/prop-types
                searchList.map((item)=>{
                    // eslint-disable-next-line react/jsx-key
                    return <ListItem className="p-0">
                    <label
                      htmlFor={item._id}
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                        onChange={onChangeChecked}
                          value={item._id}
                          name={title}
                          id={item._id}
                          ripple={false}
                          color="blue-gray"
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        {item.name}
                      </Typography>
                    </label>
                  </ListItem>
              
                 })
              ):(<div>There are no data</div>)
        }
        </List>
    </div>
  )
}
