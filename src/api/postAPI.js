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

