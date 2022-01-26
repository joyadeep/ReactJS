export const add_todo=(data)=>{
    return {
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
}
}

export const edit_todo=(id)=>{
    // console.log(`id in action : ${id}`)
    return {
        type:"EDIT_TODO",
      
    }
}

export const delete_todo=(id)=>{
    return{
         type:"DELETE_TODO",
        id
};
}

export const clear_todo=()=>{
    return {type:"CLEAR_TODO"}
}