import { 
    Checkbox,
    List,
    ListItem,
    ListItemPrefix, 
    Typography} from "@material-tailwind/react"

const priceList = ['Under $50', '$50 to $100', '$100 to $150', '$150 to $200', '$200 to $300', '$300 to $500', '$500 to $1000', 'Over $1000']
// eslint-disable-next-line react/prop-types
function PriceSideFilter({onChangeChecked}) {

  return (
   <List>
   <Typography
            variant="h5"
            color="blue-gray"
            className="font-lg pt-6"
        >
            Price
        </Typography>
       {
        priceList.map((list,index)=>{
            // eslint-disable-next-line react/jsx-key
            return (<ListItem className="p-0">
            <label
              htmlFor={index}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  value={list}
                  onChange={onChangeChecked}
                  id={index}
                  ripple={false}
                  color="blue-gray"
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {list}
              </Typography>
            </label>
          </ListItem>)
        })
       }
   </List>
  )
}

export default PriceSideFilter