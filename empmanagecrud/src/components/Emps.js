import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteEmp,getEmp } from "../services/api";
export default function Emps({onEdit,isRefreshData,setRefreshData}) {
    const[emps,setEmps]=useState([]);

    const getAllEmps=async()=>{
    //api call to fetch the data from the database
      const res=await getEmp();
      if(res.data) setEmps(res.data);
    };  


    useEffect(()=>{
      if(isRefreshData){
        getAllEmps();
        setRefreshData(false);
      }
    },[isRefreshData]);

    useEffect(()=>{
        getAllEmps();
    },[]);

    const handleEdit=(emp)=>{
        onEdit(emp);
    }

    const handleDelete=(empId)=>{
       const con=window.confirm("Confirm to Delete?????")
       if(con){
           deleteEmp(empId).then(res=>{
            if(res)  getAllEmps();
           })
       }
    }
  return (
    <div>
      <table
        className="table table-bordered"
        style={{ width: "90%", margin: "auto", border: " 1px solid #161616" ,backgroundColor:'#fff' }}
      >
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee Address</th>
            <th>Employee Department</th>
            <th>Employee BirthDate</th>
            <th>Employee Education</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {emps.map(emp=><tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.address}</td>
                  <td>{emp.department}</td>
                  <td>{emp.birth}</td>
                  <td>{emp.education}</td>
                  <td>
                    <Button onClick={()=>handleEdit(emp)} color="warning"><EditIcon /></Button>
                    <Button onClick={()=>handleDelete(emp.id)} color="error"><DeleteIcon /></Button>
                  </td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}
