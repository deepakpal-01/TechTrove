import { createContext, useContext, useEffect,useState } from "react";
import { useProductContext } from "./ProductContext";

const FilterContext=createContext();



function FilterProvider(props){

    const {myProducts}=useProductContext();

    

    const  getMaxPrice=(myProducts)=>{
        let prices=myProducts.map((product)=>{
            return product.price
        })
        let max=Math.max.apply(null, prices)
        return max;
    }
    
    const [maxPrice,setMaxPrice]=useState(getMaxPrice(myProducts));

    const sortPrice=(flow)=>{
        //eslint-disable-next-line
        containerProducts.sort((a,b)=>{
            if(flow==='positive'){
                return parseInt(a.price)-parseInt(b.price);
            }
            if(flow==='reverse'){
                return parseInt(b.price)-parseInt(a.price);
            }
        }) 
        setContainerProducts(containerProducts)
    }
    const clearFilter=()=>{
        setContainerProducts(myProducts)
        setCategory('all')
        setBrand('all')
        setSearchVal('')
        setFilterPrice(maxPrice)
        setSort(0)
        setClear(0)
    }
    


    const [containerProducts,setContainerProducts]=useState(myProducts);
    const [category,setCategory]=useState('all');
    const [brand,setBrand]=useState('all');
    const [searchVal,setSearchVal]=useState()
    const [filterPrice,setFilterPrice]=useState(maxPrice)
    const [sort,setSort]=useState(0);
    const [clear,setClear]=useState(0);
     


    useEffect(()=>{
        setMaxPrice(getMaxPrice(myProducts))
        setFilterPrice(maxPrice)
    },[myProducts])

     return(
        <FilterContext.Provider value={{containerProducts,setContainerProducts,category,setCategory,brand,setBrand,searchVal,setSearchVal,filterPrice,setFilterPrice,maxPrice,setMaxPrice,getMaxPrice,sortPrice,sort,setSort,clearFilter,clear,setClear}}>
            {props.children}
        </FilterContext.Provider>
     );   
}

const useFilterProviderContext=()=>{
    return useContext(FilterContext);
}

export {FilterProvider,useFilterProviderContext}
