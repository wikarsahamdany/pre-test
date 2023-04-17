import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className='d-flex'>
        <Sidebar/>
        <div className='flex-column' style={{marginLeft: 250, width: "100vw"}}>
        <Header/>
        <section style={{minHeight: "100vh", marginTop: 68, backgroundColor: "#EEEEEE"}}>
        <Outlet/>
        </section>
        <Footer/>
        </div>
    </div>
  )
}
