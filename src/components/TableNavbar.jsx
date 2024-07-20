import TableNavlink from "./elements/TableNavLink";

export default function TableNavbar() {
    return (
        <div className="border-b-2 shadow-md border-gray-100">
            <nav id="bar" className="flex justify-start gap-5 p-4">
                <TableNavlink href={"/tables/products"} className="mx-8 hover:text-red-900"> Product </TableNavlink>
                <TableNavlink href={"/tables/customers"} className="mx-8 hover:text-red-900"> Customers </TableNavlink>
            </nav>
        </div>
    )
}