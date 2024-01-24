import { Link } from "react-router-dom"
import { useState, useMemo } from "react";
import DataTable from "react-data-table-component"
import Filter from "../components/Filter";

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: row => row.birthdate,
        sortable: true,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true,
    },
    {
        name: 'Zip Code',
        selector: row => row.zipcode,
        sortable: true,
    },
];

function EmployeeList() {

    const data = JSON.parse(localStorage.getItem('Employee_List'))

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = data?.filter(
        item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()) || item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <Filter onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return(
        <main>
            <h1>All Employees</h1> - <Link to="/">Go to main page</Link>
            {data && 
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
            />}
            {!data && <h2>There is no data, please add some employee to see a table !</h2>}
        </main>
    )
}

export default EmployeeList