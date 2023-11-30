import { createContext,useContext, useEffect,useReducer } from "react";
import axios from 'axios'
import reducer from '../Reducers/productReducer'

//context
const ProductContext=createContext();


//context Provider
const ProductProvider=(props)=> {

    const API='https://dummyjson.com/products/?limit=100'


        
    const initialState={
        isLoading:false,
        isError:false,
        products:[],
        myProducts:[]
        
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts=async()=>{
        try {
            dispatch({type:"SET_LOADING"})
            const response=await axios.get(API);
            const data=await response.data;
            const productsArray=data.products
            dispatch({type:"SET_APP_DATA",payload:productsArray})
            
        } catch (error) {
            dispatch({type:"ERROR"})
        }
    }


    useEffect(() => {
      getProducts();
    }, [])
    
    return (
        <ProductContext.Provider value={{...state}}>
        {props.children}
    </ProductContext.Provider>
  )
}


//custom hook 
const useProductContext=()=>{
    return useContext(ProductContext)
}

export  {ProductProvider,useProductContext};
