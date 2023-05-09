import { getTopNews } from '../api/newsAPI'
import {useQuery} from '@tanstack/react-query'
import NewsCard from '../components/NewsCard'

const News = () => {
 const {data,isLoading,isError}=useQuery({queryKey:["getAllNews"],queryFn:getTopNews})
  return (
    <div className='w-11/12 py-5 mx-auto min-h-screen' >
      <h1 className='text-3xl font-semibold -tracking-wider text-slate-600 mb-5' >Top Crypto News</h1>
      {
        isLoading?<div>Loading ...</div>:isError?<div>Error</div>:
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3'>
         { data?.data?.map((item,index)=>(
          <NewsCard data={item} key={index} />
        ))}
        </div>
      }
    </div>
  )
}

export default News