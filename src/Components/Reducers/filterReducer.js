const filterReducer=(state,action)=>{
    switch(action.type){
        case 'LOAD_FILTER_PRODUCTS':
            return {
                ...state,
                myProducts:[...action.payload],
                allProducts:[...action.payload]
            };
    

        default:
            return state;
    }
}
export default filterReducer;
