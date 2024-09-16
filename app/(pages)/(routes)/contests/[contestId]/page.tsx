
import React from 'react'

import { fetchEvent } from '@/app/actions/events';
import { getEventData } from '../page';
import Eventpage from '../components/Eventpage';

interface Props{
   params:{
      contestId:string
   }
 }

const Page = async(params:Props) => {
 
const param = params.params.contestId;
 
 const res = await fetchEvent(param);
  
  return (
    <>
       <Eventpage event={res} />
    </>
  );
}


export async function generateStaticParams()
{
     const {data}:any= await getEventData()
     return data.map((item:any)=>{
        return {contestId:item.id.toString()}
      })
    
}


export default Page;