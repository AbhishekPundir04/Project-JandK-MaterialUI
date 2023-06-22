import React from 'react'

import { Outlet } from 'react-router-dom'
import DashboardLayout from './dashboardItem/DashboardLayout'
const Publicrouter = () => {
  return (
    <div>
        <DashboardLayout>
         <Outlet/>
        </DashboardLayout>
    </div>
  )
}

export default Publicrouter