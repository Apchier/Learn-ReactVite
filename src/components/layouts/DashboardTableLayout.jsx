/* eslint-disable react/prop-types */
import TableNavbar from '../TableNavbar'

export default function DashboardTableLayout({ children }) {
    return (
        <>
            <TableNavbar />
            <div className='p-5 border rounded-[10px] mt-2'>
                {children}
            </div>
        </>
    )
}