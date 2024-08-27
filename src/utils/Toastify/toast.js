import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Toastify = ( message, type, id)=>{
    if(type === "success"){
        toast.success(message, {
            position:"top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick:true,
            pauseOnHover: true,
            draggable:true,
            progress: undefined,

        })
    }else if(type === "error"){
        toast.error(message, {
            position:"top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick:true,
            pauseOnHover: true,
            draggable:true,
            progress: undefined,
            
        })
    }else if(type === "info"){
        toast.info(message, {
            position:"top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick:true,
            pauseOnHover: true,
            draggable:true,
            progress: undefined,
            
        })
    }else if(type === "warning"){
        toast.warning(message, {
            position:"top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick:true,
            pauseOnHover: true,
            draggable:true,
            progress: undefined,
            
        })
    }else {
        toast(message, {
            position:"top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick:true,
            pauseOnHover: true,
            draggable:true,
            progress: undefined,
            
        })
    }
}