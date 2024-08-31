import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = ({ children }) => {
    return (
        <>
            <div className="bg-custom-radial flex flex-col bg-fixed bg-no-repeat bg-cover min-h-screen justify-between">
                <div className="mx-6 mt-6">
                    <Header />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default UserLayout
