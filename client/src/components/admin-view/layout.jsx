import React from 'react'
import AdminSideBar from './sidebar.jsx'
import AdminHeader from './header.jsx'
import { Outlet } from 'react-router-dom'


const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full '>
      <AdminSideBar />
      <div className='flex flex-col' >
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout