import React, { useState } from "react";
import EmpForm from "./EmpForm";
import Emps from "./Emps";

export default function Home() {
  const [emp, setEmp] = useState([]);
  const [isRefreshData, setisRefreshData] = useState(false);
  if(!localStorage.getItem("user"))  window.location.href='/login';
  return (
    <div>
      <EmpForm emp={emp} setRefreshData={(val) => setisRefreshData(val)} />
      <hr />
      <Emps
        onEdit={(emp) => {
          setEmp(emp);
        }}
        isRefreshData={isRefreshData}
        setRefreshData={(val) => setisRefreshData(val)}
      />
    </div>
  );
}
