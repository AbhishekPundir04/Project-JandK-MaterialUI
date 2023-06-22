import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminDashboardLayout from './AdminDashboardLayout';

const Privaterouter = () => {
  return (
    <div>
        <AdminDashboardLayout>
            <Outlet/>
        </AdminDashboardLayout>
    </div>
  )
}

export default Privaterouter;