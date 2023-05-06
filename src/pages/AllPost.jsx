import { useQuery } from '@tanstack/react-query'
import {  NavLink, useNavigate } from 'react-router-dom'
import {getAllPosts} from '../api/postAPI'
const AllPost = () => {
    const {isLoading,error,data} =useQuery({ queryKey :["posts"], queryFn:()=>getAllPosts() })
    const navigate=useNavigate()
    return (
    <div>
       <div className='mb-4'>
       <NavLink to="/create" className="bg-blue-500 rounded-md text-white px-4 py-2 " > Create </NavLink>
       </div>
        {
            isLoading ? "Loding" : error ?"Error" : <div className='w-2/3 mx-auto text-left'>
            {
              data.map((item)=>(
                <div key={item.id} className='bg-slate-200 h-fit w-full rounded-md mb-3 py-5 px-3 flex flex-col gap-3 cursor-pointer hover:bg-slate-100 active:bg-slate-50 ' onClick={()=>{navigate(`/${item.id}`)}} >
                    <h1 className='text-xl font-medium'>{item.title}</h1>
                    <p className='text-md'>user: {item.userId}</p>
                    <p className='text-sm'>{item.body}</p>
                </div>
              ))
            }
            </div>
        }
    </div>
  )
}

export default AllPost