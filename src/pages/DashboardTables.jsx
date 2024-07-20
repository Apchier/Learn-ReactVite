import { Outlet } from "react-router-dom"
import DashboardTableLayout from "../components/layouts/DashboardTableLayout"

export default function DashboardTables() {
    return (
        <>
            <h1>Dashboard Tables</h1>
            <DashboardTableLayout>
                <Outlet />
            </DashboardTableLayout>
        </>
    )
}
