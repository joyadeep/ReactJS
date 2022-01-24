import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import './users.css';
import 'react-loading-skeleton/dist/skeleton.css'
import {api} from '../../api/api';
export const Users = () => {
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },4000);
  },[])
  return(
      <>
      <section className="users">
        <h1>Users</h1>
        <div className='userlist'>

       {
         api.map((item)=>{
           return(
             <div key={item.id}>
        <div className="card" >
       {loading?<Skeleton circle={true} height={100} width={100} /> :<img src={item.image} alt="poatrait" />}
        <p className='name'>{loading?<Skeleton height={24}/>:item.name}</p>
        <p className='age'>{loading?<Skeleton height={22}/>:item.age}</p>
        <p className='email'>{loading?<Skeleton height={20}/>:item.email}</p>
        </div> 
             </div>
           )
         })
       }
        </div>
        
      </section>
      
      </>
  );
};
