import TableLayout from "../../../components/fragments/TableLayout";

export default function CustomerPage() {
    return (
        <TableLayout title='customers'>
            <div className="p-6 px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="flex items-center gap-4">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Material XD Version</p>
                                </div>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="w-10/12">
                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: "60%;" }}></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="flex items-center gap-4">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add Progress Track</p>
                                </div>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="w-10/12">
                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: "10%;" }}></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="flex items-center gap-4">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Fix Platform Errors</p>
                                </div>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="w-10/12">
                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{ width: "100%;" }}></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="flex items-center gap-4">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Launch our Mobile App</p>
                                </div>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="w-10/12">
                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{ width: "100%;" }}></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="flex items-center gap-4">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add the New Pricing Page</p>
                                </div>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                <div className="w-10/12">
                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: "25%;" }}></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </TableLayout>
    )
}