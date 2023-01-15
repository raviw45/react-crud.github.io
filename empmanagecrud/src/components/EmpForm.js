import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addEmp, updateEmp } from "../services/api";

export default function EmpForm({emp,setRefreshData}) {
    const [form ,setForm]=useState({
        name:'',
        email:'',
        address:'',
        department:'',
        birth:'',
        education:''
    })
    const handleSub=(e)=>{
          e.preventDefault();
    };
  useEffect(()=>{
      setForm(emp);
  },[emp]);
    const handleChange=(e)=>{
       const tempForm={...form};
       tempForm[e.target.name]=e.target.value;
       setForm(tempForm);
    };

    const handleReset=()=>{
         setForm({
            name:'',
            email:'',
            address:'',
            department:'',
            birth:'',
            education:''
         });
    };

    const handleSubmit=async()=>{
         if(form.id){
             const res=await updateEmp(form);
             if(res.data){
                 toast.success('Book Updated Successfully!!!');
                 handleReset();
             }
            }else{
             const res=await addEmp(form);
             if(res.data){
                 toast.success('Book Added Successfully!!!');
                 handleReset();
             }
         }
         setRefreshData(true);
    }
  return (
    <div>
      <form className="form-group" onSubmit={handleSub}>
        <h3 className="heading">Add Employee Data</h3>
        <div className="row">
          <div className="col-md-6 sm-12">
            <label htmlFor="name">Employee Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div className="col-md-6 sm-12">
            <label htmlFor="email">Employee email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 sm-12">
            <label htmlFor="address">Employee Address</label>
            <input
              className="form-control"
              type="text"
              id="address"
              value={form.address}
              onChange={handleChange}
              name="address"
              required
            />
          </div>
          <div className="col-md-6 sm-12">
            <label htmlFor="department">Employee Department</label>
            <input
              className="form-control"
              type="department"
              value={form.department}
              id="department"
              onChange={handleChange}
              name="department"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 sm-12">
            <label htmlFor="birth">Employee date of birth</label>
            <input
              className="form-control"
              type="date"
              value={form.birth}
              onChange={handleChange}
              id="birth"
              name="birth"
              required
            />
          </div>
          <div className="col-md-6 sm-12">
            <label htmlFor="department">Employee Education</label>
            <input
              className="form-control"
              type="education"
              id="education"
              value={form.education}
              onChange={handleChange}
              name="education"
              required
            />
          </div>
        </div>
        <div>
          <Button
          className="mt-4 mx-4"
            variant="contained"
            onClick={handleReset}
            sx={{
              borderRadius: "24px",
              fontFamily: "monaco",
              fontWeight: "bold",
              letterSpacing: "2px",
              padding: "5px 28px",
              backgroundColor: "#E88E19",
            }}
            color="warning"
          >
            RESET
          </Button>
          <Button
          className="mt-4 mx-4 "
          onClick={handleSubmit}
            variant="contained"
            sx={{
              borderRadius: "24px",
              fontFamily: "monaco",
              fontWeight: "bold",
              letterSpacing: "2px",
              padding: "5px 28px",
              backgroundColor: "#3398E5",
            }}
            color="primary"
          >
            Add Employee
          </Button>
        </div>
      </form>
    </div>
  );
}
