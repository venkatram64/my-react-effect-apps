import React from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';
import {fetchEmployees, deleteEmp} from '../actions';

class ListEmployee extends React.Component {
    
    constructor(){
        super();
        this.state = {
            redirectToReferer: false
        }
    }
    
   
    componentDidMount(){
        this.props.fetchEmployees();
    }
   
    deleteEmp = (empId) =>{        
        toast.success("Employee deleted successfully...");
        this.setState({
            redirectToReferer:true
        });
    }

    render(){
        console.log(this.props.employees.employees);
        if(this.state.redirectToReferer){
            return <Redirect to="/" />
        }
        
        return (     
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 my-5 text-right'>
                        <Link to='/add' className='btn btn-outline-dark'>Add Employee</Link>
                    </div>
                    <div className='col-md-10 mx-auto'>
                        <table className='table table-hover'>
                            <thead className='text-white bg-dark text-center'>
                                <tr>                                   
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">EmpNo</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.employees.employees && this.props.employees.employees.map((emp) =>(
                                    <tr key={emp.id}>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.empNo}</td>
                                        <td>
                                            <Link to={`/edit/${emp.id}`} className="btn btn-small btn-primary mr-2">
                                                Edit
                                            </Link>
                                            <button type="button" onClick={() => this.props.deleteEmp(emp)} className="btn btn-small btn-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        employees: state.employee
    }
}

const mapDispatchToProps = (dispatch, ownProp) => {
    return {
        fetchEmployees : () => dispatch(fetchEmployees()),
        deleteEmp : (ownProp) => dispatch(deleteEmp(ownProp))  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployee);
