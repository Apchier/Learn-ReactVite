/* eslint-disable react/prop-types */
import Navbar from "../Navbar"
import Footer from "../Footer"
import Aside from "../Aside"
import { Outlet } from "react-router-dom"


export default function DashboardMainLayout() {
    return (
        <section id="container" className="flex flex-col gap-5 w-full h-full p-3">
            <div className="min-h-screen bg-gray-50/50">
                <Aside />
                <div className="p-4 xl:ml-80">
                    <Navbar />
                    <div className="mt-12">
                        <Outlet />
                    </div>
                    <div className="text-blue-gray-600">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}