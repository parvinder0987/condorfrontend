import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaToggleOn, FaToggleOff, FaBook, FaTrash } from 'react-icons/fa';
import axios from "axios";
import Switch from '@mui/material/Switch';


function CategoryTable() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(true)


console.log(data,'=======data')

    useEffect(() => {
        fetchData();
    }, [refresh]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users/getallcategory");
            console.log("response", response.data);
            setData(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };


    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/deleteCategory/${id}`);
            if (response.status === 200) {
                toast.success("Category Deleted Successfully");
                fetchData();
            }
        } catch (error) {
            console.error("Delete error:", error);
        } console.log(data, '=dataatatatata')
    };

    const changestatus = async (ID, currentStatus) => {
        try {
            setRefresh(false);
            // Toggle status
            console.log(currentStatus)
            const newStatus = currentStatus == "0" ?  "1" : '0';
  
            const response = await axios.post(`/users/statusupdate`, {
                id: ID,
                Status: newStatus
            });
            toast.success("Status updated successfully!");
            setRefresh(true);
            return response.data;
        } catch (error) {
            console.error("Error updating status:", error);
            throw error;
        }
    };
    const isActive = (status) => status == 1;

    const renderStatusButton = (item) => (

        console.log(item,'======================itemitem'),

        <button
            className={`btn ${isActive(item.Status) ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => changestatus(item[0], item[2])}
        >
            {isActive(item[2]) ? <FaToggleOn /> : <FaToggleOff />}
        </button>
    );

    const columns = [
        {
            name: "serialNumber",
            label: "S.No.",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Sport",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                customBodyRender: (value, tableMeta) => {
                    return renderStatusButton(tableMeta.rowData);
                }
            },
        },
        {
            name: "action",
            label: "Action",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowId = tableMeta.rowData[0];
                    return (
                        <>
                            <button
                                className="btn btn-primary"
                                onClick={() => {/* your view function here */ }}
                            >
                                <FaBook />
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(rowId)}
                            >
                                <FaTrash />
                            </button>
                        </>
                    );
                },
            },
        },
    ];

    const options = {
        filterType: 'checkbox',
        selectableRows: "none",
    };

    const modifiedData = data && Array.isArray(data)
        ? data.map((item, index) => ({
            ...item,
            serialNumber: index + 1,
        }))
        : [];

    return (
        <>
            <div className="app-content content ">
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper container-xxl p-0 ">
                    <div className="content-header ">
                        <div className="content-header-left mb-2">
                            <div className="breadcrumbs-top">
                                <div className="d-flex">
                                    <h2
                                        className=" content-header-title mb-1 mt-1"
                                    >
                                        {/* <div style={{ width: "13rem" }}>Sport Listing</div> */}
                                    </h2>
                                    <div className="w-100 d-flex align-items-center justify-content-end">
                                        <button
                                            className="mr btn btn-primary me-3"
                                            onClick={() => router("/createcategroy")}

                                        >
                                            Add+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section">
                        <MUIDataTable
                            // title={"Sport List"}
                            data={modifiedData}
                            columns={columns}
                            options={options}
                        />
                    </section>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />

            </div>
        </>
    );
}

export default CategoryTable;
