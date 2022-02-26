import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    empNo: "",
    department: "",
  });

  const fetchEmployee = async (id) => {
    const result = await axios.get(`http://localhost:8081/employees/${id}`);
    setEmployee(result.data);
  };

  //destructuring
  const { firstName, lastName, email, empNo, department } = employee;

  useEffect(() => {
    fetchEmployee(id);
  }, []);

  return (
    <div className="container">
      View Employee...
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <h3>{email}</h3>
      <h3>{empNo}</h3>
      <h3>{department}</h3>
    </div>
  );
};

export default ViewEmployee;
