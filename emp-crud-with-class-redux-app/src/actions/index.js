import axios from 'axios';
export const fetchEmployees = () => async dispatch => {
    const response = await axios.get('http://localhost:8081/employees');
    dispatch({
        type:'DISPLAY_EMPLOYEE',
        payload: response.data
    });
}

export const addEmployee = (emp) => async dispatch => {
    const response = await axios.post('http://localhost:8081/employees',{
        id: emp.id,
        name: emp.name,
        empNo: emp.empNo,
        email: emp.email
    });
    dispatch({
        type:'ADD_EMPLOYEE',
        payload: response.data
    })
}

export const fetchCurrentEmployee = (empId) => async (dispatch) => {
    //debugger;
    const response = await axios.get(`http://localhost:8081/employees/${empId}`);
    dispatch({
        type: 'SET_CURRENT_EMPLOYEE',
        payload: response.data
    })

}

export const updateEmployee = (emp) => async dispatch => {
    //debugger;
    const response = await axios.patch(`http://localhost:8081/employees/${emp.id}`,{
        name: emp.name,
        empNo: emp.empNo,
        email: emp.email
    });
    //debugger;
    dispatch({
        type:'EDIT_EMPLOYEE',
        payload: response.data
    })
}

export const deleteEmp = (emp) => async dispatch => {
    const response = await axios.delete(`http://localhost:8081/employees/${emp.id}`);

    dispatch({
        type:'DETLETE_EMPLOYEE',
        payload: emp
    })
}