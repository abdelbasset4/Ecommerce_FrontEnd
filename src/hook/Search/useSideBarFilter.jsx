import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
import { getAllBrand } from "../../Redux/Slice/Brand/BrandThunk";
import { useState } from "react";

function useSideBarFilter() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategory(`/api/v1/categories`));
        dispatch(getAllBrand(`/api/v1/brands`));
    }, [dispatch]);

    const categories = useSelector(state => state.category.category);
    const brands = useSelector(state => state.brand.brand);

    let allBrand ,allCategory =[];
    if(brands.data){
        // eslint-disable-next-line no-unused-vars
        allBrand = brands.data
    }
    if(categories.data){
        // eslint-disable-next-line no-unused-vars
        allCategory = categories.data
    }
    const [checkCategory,setCheckCategory] = useState([])
    const [checkBrand,setCheckBrand] = useState([])
    const [checkPrice,setCheckPrice] = useState([])
    const onChangeInput = (e)=>{
        let value = e.target.value;
        let name = e.target.name;

        if(name ==="Category"){
            if(e.target.checked ===true){
                setCheckCategory([...checkCategory,value])
            }else if (e.target.checked === false) {
                const newArry = checkCategory.filter((e) => e !== value)
                setCheckCategory(newArry)
            }
        }else if(name ==="Brand"){
            if(e.target.checked ===true){
                setCheckBrand([...checkBrand,value])
            }else if (e.target.checked === false) {
                const newArry = checkBrand.filter((e) => e !== value)
                setCheckBrand(newArry)
            }
        }
        
    }
    const onChangePriceRange = (e)=>{
        let value = e.target.value;
        if(e.target.checked ===true){
            setCheckPrice([...checkPrice,value])
        }else if (e.target.checked === false) {
            const newArry = checkPrice.filter((e) => e !== value)
            setCheckPrice(newArry)
        }
    }
    console.log(checkPrice);
    return [allBrand,allCategory,onChangeInput,onChangePriceRange]
}

export default useSideBarFilter