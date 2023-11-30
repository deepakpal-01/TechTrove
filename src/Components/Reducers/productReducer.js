const productReducer=(state,action)=>{
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true
            }
        case "ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true
            }
            
        case "SET_APP_DATA":
            const myProducts=action.payload.filter((product)=>{
                return product.category==="smartphones"||product.category==="mens-watches"||product.category==="laptops"||product.category==="womens-watches"||product.category==="home-decoration"||product.category==="automotive"||product.category==="sunglasses"
              })
            
            return {
                ...state,
                isLoading:false,
                isError:false,
                products:action.payload,
                myProducts:myProducts               
            }
        
        default:
            return {...state};
    }

}
export default productReducer