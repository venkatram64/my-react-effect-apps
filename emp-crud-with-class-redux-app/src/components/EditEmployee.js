import React from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import {fetchCurrentEmployee, updateEmployee} from '../actions';

class EditEmployee extends React.Component {

    constructor(){
        super();
        this.state = {
            id: '',
            name: '',
            email: '',
            empNo: '',
            redirectToReferer:false,
            isEdit: false
        }
    }
    

    componentDidMount(){
        const empId = this.props.match.params.id;
        this.props.fetchCurrentEmployee(empId);
       
        //debugger;
        const editEmployee = this.props.employees;
        this.setState({
            id: editEmployee.id,
            name: editEmployee.name,
            email: editEmployee.email,
            empNo: editEmployee.empNo,
            isEdit: true
        })
    }
     

     handleChange = (name) => (e) => {
        this.setState({
            [name]: e.target.value
        })
    }

     handleSubmit = e => {
         const {name, email, empNo} = this.state;
        e.preventDefault();
        if(!name || !email || !empNo){
            return toast.warning("Please enter all the form fields");
        }
       
        const empId = this.props.match.params.id;
        const data = {
            id: empId,
            name: name,
            email: email,
            empNo: empNo
        }
        debugger;
        //console.log(data);
        this.props.updateEmployee(data);       
        toast.success("Employee edited successfully!");
        this.setState({
            redirectToReferer: true
        })
    }


    render(){
        const {id, name, empNo, email, isEdit, redirectToReferer} = this.state;
        if(redirectToReferer){
            return <Redirect to="/" />
        }
        return (
            <div className='container'>
                {isEdit ?(
                    <>
                        <h1 className='display-3 my-5 text-center'>
                            Edit Employee for {id}
                        </h1>
                        <div className='row'>        
                            <div className='col-md-6 shadow mx-auto p-5'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <input type="text" placeholder='Name' className='form-control'
                                            onChange={this.handleChange('name')}
                                            value={name}/>
                                    </div>
                                    <div className='form-group'>
                                        <input type="email" placeholder='Email' className='form-control'
                                            onChange={this.handleChange('email')}
                                            value={email}/>
                                    </div>
                                    <div className='form-group'>
                                        <input type="text" placeholder='Employee Number' className='form-control'
                                            onChange={this.handleChange('empNo')}
                                            value={empNo}/>
                                    </div>
                                    <div className='form-group'>
                                        <input type="submit" value='Edit Employee' className='btn btn-dark'/>
                                    </div>
                                    <Link  
                                        to="/" className='btn btn-danger ml-3'>
                                        Cancel
                                    </Link>
                                </form>
                            </div>        
                        </div>
                    </>
                ):(
                    <h1 className='display-3 my-5 text-center'>
                            Edit Employee for {id} not found
                    </h1>
                )}
                
            </div>
        )    
    }
    
};

const mapStateToProps = state => {
    return {
        employees: state.employee
    }
}

const mapDispatchToProps = (dispatch, ownProp) => {
    return {
        fetchCurrentEmployee: (ownProp) => dispatch(fetchCurrentEmployee(ownProp)),
        updateEmployee: (ownProp) => dispatch(updateEmployee(ownProp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
