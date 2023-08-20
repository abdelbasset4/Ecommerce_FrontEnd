import { useState } from "react"
import useGetAllSearchProducts from "../product/useGetAllSearchProducts";
import { useEffect } from "react";

function useSearchNavBar() {
  const  [,,,,getProductData]= useGetAllSearchProducts(0)

  const [word, setWord] = useState('')

  const onChangeSearch = (e)=>{
    localStorage.setItem("searchWord", e.target.value)
    setWord(e.target.value)
  }
  useEffect(() => {
    setTimeout(() => {
        getProductData()
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word])
  
  return [word,onChangeSearch]
}

export default useSearchNavBar