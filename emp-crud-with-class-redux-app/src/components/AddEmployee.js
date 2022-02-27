import React from 'react';
import { toast } from 'react-toastify';
import { uuid } from 'uuidv4';
import {connect} from 'react-redux';
import {fetchEmployees, addEmployee} from '../actions';
import { Redirect } from 'react-router';

class AddEmployee extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            empNo: '',
            redirectToReferer: false
        }
    }    

    componentDidMount(){
        //this.props.fetchEmployees();
    }
    
    checkEmail = () =>{
        return this.props.employees.employees.find(emp => emp.email === this.state.email && this.state.email);
    } 
    checkEmpNo = () => {
        return this.props.employees.employees.find(emp => emp.empNo === this.state.empNo && this.state.empNo);
    }

    handleChange = (name) => (e) => {
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, email, empNo} = this.state;
        if(!name || !email || !empNo){
            return toast.warning("Please enter all the form fields");
        }
        if(this.checkEmail()){
            return toast.error("Email is already taken...");    
        }
        //debugger;
        if(this.checkEmpNo()){
            return toast.error("EmpNo is already taken...");    
        }

        const data = {
            id: uuid(),
            name: name,
            email: email,
            empNo: empNo
        }
        
        this.props.addEmployee(data);
        this.setState({
            redirectToReferer: true    
        })
        toast.success("Employee added successfully!");
        
    }

    render(){
        const {name, email, empNo, redirectToReferer} = this.state;
        if(redirectToReferer){
            return <Redirect to="/" />
        }
        return (
            <div className='container'>
                <h1 className='display-3 my-5 text-center'>
                    Add Employee
                </h1>
                <div className='row'>        
                    <div className='col-md-6 shadow mx-auto p-5'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <input type="text" placeholder='Name' className='form-control'
                                    value={name} onChange={this.handleChange('name')}/>
                            </div>
                            <div className='form-group'>
                                <input type="email" placeholder='Email' className='form-control'
                                    value={email} onChange={this.handleChange('email')}/>
                            </div>
                            <div className='form-group'>
                                <input type="text" placeholder='Employee Number' className='form-control'
                                    value={empNo} onChange={this.handleChange('empNo')}/>
                            </div>
                            <div className='form-group'>
                                <input type="submit" value='Add Employee' className='btn btn-block btn-dark'/>
                            </div>
                        </form>
                    </div>        
                </div>
            </div>
        )
    }    
};

const mapStateToProps = (state) => {
    return {
        employees: state.employee
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchEmployees : () => dispatch(fetchEmployees()),
        addEmployee: (ownProps) => dispatch(addEmployee(ownProps))  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
