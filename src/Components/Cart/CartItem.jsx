import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import Counter from "../Utility/Counter";
import {AiFillCloseCircle,AiOutlineDelete} from "react-icons/ai"   
import { baseURL } from "../../API/mainBaseURL";
  export default function CartItem({product}) {
    // console.log(product.product);
    return (
      <Card className="flex-col lg:flex-row w-full max-w-[40rem]  mb-4">
        <CardHeader shadow={false} floated={false} className="w-full lg:w-2/5 shrink-0 m-0 rounded-md relative group cursor-pointer">
          <img 
            src={`${baseURL}/products/${product.product.imageCover}`}
            alt={`${product.product.title}`}
            className="w-full h-full object-cover "
          />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-30  bg-gray-100">
                <AiFillCloseCircle size={"2rem"}  color="#333A48"/>
            </div>
        </CardHeader>
        <CardBody>

          <Typography variant="h4" color="blue-gray" className="mb-2">
          {`${product.product.title}`}
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
          {`${product.price}`}$
          </Typography>
          <div className="flex justify-between items-center">
            <Counter quantity={`${product.quantity}`}/>
            <Typography variant="h5"  className="font-normal text-black">
                {product.quantity * product.price}$
            </Typography>
          </div>
        </CardBody>
        <div className="absolute right-2 top-2 cursor-pointer">
            <AiOutlineDelete size={"1.2rem"}/>
        </div>
      </Card>
    );
  }