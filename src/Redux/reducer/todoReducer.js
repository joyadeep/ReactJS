const initialState={
    list:[]
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "ADD_TODO":
            const {id,data}=action.payload;
            return{
                ...state,
                list:[...state.list,{id:id,data:data}]
            }
        
        case "EDIT_TODO":

        case "DELETE_TODO":
            const newlist= state.list.filter((item)=>item.id !==action.id);
            return{
                ...state,
                list: newlist
            }

        case "CLEAR_TODO":
            {
                return{
                    ...state,
                    list:[]
                }
            }

        default:
            return state;
    }
}

export default todoReducer;