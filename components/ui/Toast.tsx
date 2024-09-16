"use client";

import { toast } from "react-toastify";

export const SuccessToast=(message:string)=>{
return toast.success(message)
}

export const ErrorToast=(message:string)=>{
    return toast.error(message)
    }