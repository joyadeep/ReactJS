import axios from "axios";

// const baseURL="https://crypto-news16.p.rapidapi.com/news/";

const config={
    headers:{
        'X-RapidAPI-Key': '66f6b00ccfmsh4b72c104b657f76p1312c5jsned8ba0069647',
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
}

export const getTopNews=async()=>{
    try {
        const result=await axios.get("https://crypto-news16.p.rapidapi.com/news/top/5",config)
        // console.log("result =",result);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}