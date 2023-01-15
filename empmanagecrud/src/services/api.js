import axios from "axios"
import { toast } from "react-toastify";
import { BASE_URL, EMP, LOGIN } from "./constants"

const getEmp=async()=>{
    try {
        return await axios.get(BASE_URL+EMP);
    } catch (error) {
        toast.error('Fetching Error,');
        return [];
    }
}

const addEmp=async(emp)=>{
    try {
        return await axios.post(BASE_URL+EMP,emp);
    } catch (error) {
          toast.error('Emp not Added. Try again!!!');
    }
}

const updateEmp=async(emp)=>{
    try {
        return await axios.put(BASE_URL+EMP,emp);
    } catch (error) {
        toast.error('Emp not updated. Try again!!!');
    }
}

const deleteEmp=async(empId)=>{
    try {
        const res= await axios.delete(BASE_URL+EMP+empId);
        if(res.data){
            toast.success('Emp deleted Successfylly!!!');
            return true;
        }
    } catch (error) {
        toast.error('Emp not deleted. Try again!!!');
        return false;
    }
}


const LoginData=async(form)=>{
    try {
        return await axios.post(BASE_URL+EMP+LOGIN,form);
    } catch (error) {
      toast.error("Not valid User. Enter Valid Id and password!!!");
      return [];
   }
}

export {addEmp,getEmp,deleteEmp,updateEmp,LoginData};