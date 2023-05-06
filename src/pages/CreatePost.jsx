import { useState } from "react"
import {postData} from '../api/postAPI';
import {useMutation,useQueryClient} from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [datas,setData]=useState({userId:1,title:'',body:''})
    const queryClient=useQueryClient()
    const navigate=useNavigate()
    const mutation =useMutation({mutationFn:postData,
    onSuccess:data=>{
        console.log("data",data)
        queryClient.invalidateQueries(["posts"])
        queryClient.setQueryData(["posts",data.id],data)
        navigate(`/${data.id}`)
    }})

    const handleChange=(e)=>{
        setData({...datas,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        mutation.mutate(datas);

    }

  return (
    <div className="w-1/3 mx-auto px-3 py-5 rounded-md text-left bg-slate-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-xl text-slate-800">Title</label>
                <input className=" rounded-md border border-slate-500 text-lg pl-2 py-2 outline-none" type="text" name="title" value={datas.title} onChange={handleChange}  />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="body"  className="text-xl text-slate-800" >Body</label>
                <textarea rows={5} className=" resize-none rounded-md border border-slate-500 text-lg pl-2 py-2 outline-none"  name="body" value={datas.body} onChange={handleChange} />
            </div>
            <button type="submit" className="bg-green-500 text-white rounded-md text-xl py-2">Post</button>
        </form>
    </div>
  )
}

export default CreatePost