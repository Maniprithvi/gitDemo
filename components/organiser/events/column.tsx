"use client"
 
import { ColumnDef } from "@tanstack/react-table"
// import { CellAction } from './cell-action'


export type Payment = {
    id: string
    name:string,
    amount: number
    bookingStatus: "pending" | "processing" | "success" | "failed"
    noSlots:number;
    // accessorKey:Date
  }
export const columns:ColumnDef<Payment>[]=[
    {
        accessorKey:'name',
        header:'Name'
    },
    {
        accessorKey:'bookingStatus',
        header:'Booking Status'
    },
    {
        accessorKey:'noSlots',
        header:'No of Slots'
    },
    {
        accessorKey:"amount",
        header:'Amount'
    },
   
    // {
    //     accessorKey:'status',
    //     header:'',
    //     cell:({row}:any)=>(
    //         <div className="flex items-center gap-x-2" onClick={()=>''}>
    //             { row.}
    //             <div  className='h-6 w-6 rounded-full border'/>
    //         </div>
    //     )
    // },
    
    // {
    //     accessorKey:'createdAt',
    //     header:'Date'
    // },
   
]


//  {
//     id:"actions",
//     cell:({row}:any)=> 
//     // <CellAction  data={row.original}
//     />
// }