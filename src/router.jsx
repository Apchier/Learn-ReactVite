import DashboardMainLayout from "./components/layouts/DashboardMainLayout";
import Dashboard from "./pages/Dashboard";
import DashboardNotifications from "./pages/DashboardNotifications";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardTables from "./pages/DashboardTables";
import CustomerPage from "./pages/sub-pages/tables/CustomerPage";
import ProductPage from "./pages/sub-pages/tables/ProductPage";

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Navigate
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="tables" element={<DashboardTables />}>
                <Route index element={<Navigate to="products" />} />
                <Route path="products" element={<ProductPage />} />
                <Route path="customers" element={<CustomerPage />} />
            </Route>
            <Route path="notifications" element={<DashboardNotifications />} />
        </Route>
    )
)

