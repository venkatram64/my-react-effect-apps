import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {

    const {id} = useParams();

    const [employee, setEmployee] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'empNo': '' ,
        'department': ''   
    });

    const navigate = useNavigate();

    const fetchEmployee = async (id) => {
        const result = await axios.get(`http://localhost:8081/employees/${id}`)
        setEmployee(result.data);
    }

    useEffect(() => {
        fetchEmployee(id);
    },[])
    

    //destructuring 
    const {firstName, lastName, email, empNo, department} = employee;

    const onInputChange = e => {
        setEmployee({...employee, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        editEmployee(employee);
        navigate('/employees');
    }

    const editEmployee = async (employee) => {
        const emp = await axios.patch(`http://localhost:8081/employees/${employee.id}`,{
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            empNo: employee.empNo,
            department: employee.department
        });
        return emp;
    }

    return (
        <div className='container'>            
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Editing employee...</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input 
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='First Name'
                            name='firstName'
                            value={firstName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Last Name'
                            name='lastName'
                            value={lastName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='email'
                            className='form-control form-control-lg'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Employee Number'
                            value={empNo}
                            name='empNo'
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Designation'
                            value={department}
                            name='department'
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className='btn btn-primary btn-block'>Edit Employee</button>
                </form>
            </div>
        </div>
    )
}

export default EditEmployee;