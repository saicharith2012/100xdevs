import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout