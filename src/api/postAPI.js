import axios from "axios";

const router=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
});

export const getAllPosts=async()=>{
    try {
        const result =await router.get("posts");
        return result.data;
    } catch (error) {
        console.log("error",error)
    }
}

export const getSinglePost=async(id)=>{
    try {
        const result= await router.get(`posts/${id}`)
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

export const postData=async(data)=>{
    try {
        const result= await router.post("posts",data);
        return result.data;
    } catch (error) {
        console.log("error",error)
    }
}

