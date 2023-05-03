import { useQuery } from '@tanstack/react-query'
import {getAllPosts} from '../api/postAPI'
const AllPost = () => {
    const {isLoading,error,data} =useQuery({ queryKey :["posts"], queryFn:()=>getAllPosts() })
  return (
    <div>
        {
            isLoading ? "Loding" : error ?"Error" : console.log("data==",data)
        }
    </div>
  )
}

export default AllPost