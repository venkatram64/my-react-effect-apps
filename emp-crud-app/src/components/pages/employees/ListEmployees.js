import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListEmployees = () => {

  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("fetching data...");
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const results = await axios.get("http://localhost:8081/employees");
    setEmployees(results.data);
  };

  const deleteEmp = async (emp) => {
    //debugger;
    const deleteEmp = await axios.delete(`http://localhost:8081/employees/${emp.id}`);
    fetchEmployees();
    navigate('/employees');
  }

  return (
    <div className="py-4">
      <div className="row">
        <div className="mx-auto text-right">
          <Link to="addEmp" className="btn btn-outline-dark">
            Add employee
          </Link>
        </div>
        <div className="mx-auto">
          <table className="table table-hover border shadow">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Employee #</th>
                <th scope="col">Department</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
                {employees && employees.map(emp =>(
                    <tr key={emp.id}>
                        <td>{emp.firstName}</td>  
                        <td>{emp.lastName}</td> 
                        <td>{emp.email}</td>
                        <td>{emp.empNo}</td>
                        <td>{emp.department}</td>    
                        <td>
                            <Link to={`view/${emp.id}`} className="btn btn-primary mr-10">
                                View
                            </Link> 
                            <Link to={`edit/${emp.id}`} className="btn btn-outline-primary mr-10">
                                Edit
                            </Link>
                            <button type="button" className="btn btn-danger ml-10" onClick={() => deleteEmp(emp)}>Delete</button>
                        </td>                    
                    </tr>
                ))}                          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListEmployees;
