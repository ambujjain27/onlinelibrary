const initialState={books:[{bookname: "", authorname: "", bookdescription: '', count: ""}]};
const reducer= (state=initialState, action)=>{
    const newState={...state};
    if(action.type ==='ADD_BOOK'){
        return{
            ...state,
            books: state.books.concat(action.value) 
        }    
        
        
    }
    
    return newState;
}

export default reducer;