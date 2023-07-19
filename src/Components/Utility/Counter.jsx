import { Button, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClickPlus() {
        setCount(count + 1);
    }
    function handleClickMinus() {
        setCount(count -1);
    }
    
  return (
    <div className='flex items-center '>
        <Button className="bg-white text-gray-900 border border-gray-600  p-3 rounded-none rounded-l-md hover:bg-gray-900 hover:text-white"  onClick={handleClickMinus}>
          <AiOutlineMinus size={"0.5rem"}/>
          </Button>
          <Typography className="text-black text-base font-semibold border border-gray-600 py-1 px-3 ">
            {count}
          </Typography>
          <Button className="bg-white text-gray-900 border border-gray-600  p-3 rounded-none rounded-r-md hover:bg-gray-900 hover:text-white" onClick={handleClickPlus}>
          
          <AiOutlinePlus size={"0.5rem"}/>
        </Button>
   
    </div>
  )
}
