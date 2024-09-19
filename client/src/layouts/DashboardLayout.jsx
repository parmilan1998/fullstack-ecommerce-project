import React from 'react'
import Sidebar from '../components/organisms/Sidebar'
import { Outlet } from 'react-router-dom'
import DashboardNavbar from '../components/organisms/DashboardNavbar'

const DashboardLayout = () => {
  return (
    <div>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <main className='col-span-4'>
          <DashboardNavbar />
          <div className='p-6'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
