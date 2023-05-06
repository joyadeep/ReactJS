import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {getSinglePost} from '../api/postAPI'

const SinglePost = () => {
    const {id}=useParams()
    const {isLoading,error,data}=useQuery({
        queryKey:["posts",id],
        queryFn:()=>getSinglePost(id)
    })
  return (
    <div>
        {isLoading ? "Loading" : error ? "Error" : <>
        <div className='w-3/4 text-left mx-auto bg-slate-200 px-5 py-5 rounded-md flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>{data.data.title}</h1>
            <h4>{data.data.body}</h4>
        </div>
        </>}

    </div>
  )
}

export default SinglePost