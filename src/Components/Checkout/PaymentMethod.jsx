import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Button,

} from "@material-tailwind/react";
import useGetUserAdresses from "../../hook/Adress/useGetUserAdresses";
import useCashOrder from "../../hook/Checkout/useCashOrder";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Notify from "../../hooks/useNotify";
import useCardOrder from "../../hook/Checkout/useCardOrder";
export default function PaymentMethod() {
  const [adresses] = useGetUserAdresses()
  const [changeAdress,adressDetails,handelCreateCashOrder] = useCashOrder()
  const [handelCreateCardOrder] = useCardOrder(adressDetails)
  // console.log(adresses);
  const [type,setType] = useState()
  const onChangeRadio = (e)=>{
    setType(e.target.value)
  }
  const handelPay = ()=>{
    if(type ==="VISA"){
      handelCreateCardOrder()
    }else if(type ==="CASH"){
      handelCreateCashOrder()
    }else{
      Notify("select payment method","warn")
    }
  }
  return (
    <>
      <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
        Shopping cart
      </h2>
      <Card className="mt-9">
        <List>
          <ListItem className="p-0 mb-3">
            <label
              htmlFor="vertical-list-react"
              className="px-3 py-2 flex items-center w-full cursor-pointer">
              <ListItemPrefix className="mr-3">
                <Radio
                  value="VISA"
                  onChange={onChangeRadio}
                  name="vertical-list"
                  id="vertical-list-react"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                VISA Card
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-vue"
              className="px-3 py-2 flex items-center w-full cursor-pointer">
              <ListItemPrefix className="mr-3">
                <Radio
                  value="CASH"
                  onChange={onChangeRadio}
                  name="vertical-list"
                  id="vertical-list-vue"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                Cash on delevery
              </Typography>
            </label>
          </ListItem>
          
        </List>
        <select name="" id="select-adress" className="cursor-pointer relative w-1/2 mb-4 appearance-none rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input" onChange={changeAdress}>
        <option value="0" className="cursor-pointer">choose one adress</option>
        {
          adresses?.data?.length > 0 ? (
            adresses?.data?.map((adress) =><option className="cursor-pointer" key={adress._id} value={adress._id}>{adress.alias}</option>)
          ):(<option>Choose Adress</option>)
        }
        
        </select>

            
      </Card>

        <Button onClick={handelPay} className=" bg-gray-900 text-white rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80">
          Select
        </Button>
        <ToastContainer/>
    </>
  );
}
