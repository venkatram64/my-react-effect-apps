import React from 'react';
import { Outlet } from 'react-router-dom';

const EmployeeLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default EmployeeLayout;