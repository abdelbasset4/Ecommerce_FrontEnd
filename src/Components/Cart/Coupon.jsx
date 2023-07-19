import { Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Coupon() {
    const [coupon, setCoupon] = useState("");
    const onChange = ({ target }) => setCoupon(target.value);
    
    return (
       <div className="max-w-[24rem] mt-8"> 
      <div className="relative flex w-full ">
        <Input
          type="text"
          label="Enter your coupon code ...."
          value={coupon}
          onChange={onChange}
          className="pr-20 h-9 "
          containerProps={{
            className: "min-w-0 ",
          }}

         
        />
        <Button
          size="sm"
         
          disabled={!coupon}
          className={`!absolute right-1 top-1 rounded ${!coupon ? 'bg-gray-500 text-white' : 'text-white bg-gray-900'}` }
        >
          Apply
        </Button>
        
      </div>
      <Typography  className=" bg-white text-gray-900 border border-gray-900 rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80" fullWidth>
        Procced to checkout 14.99$
       </Typography>
      <Link to="/checkout">
        <Button  className=" bg-gray-900 text-white rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80" fullWidth>
            Checkout
        </Button>
      </Link>
       </div>
    );
}
