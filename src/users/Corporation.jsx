// import { response } from 'express'
import React, { useEffect, useState } from 'react'
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import MUIDataTable from "mui-datatables";
import axios from 'axios';


const Corporation = () => {

    const [corporation, setCorporation] = useState([]);

    useEffect(() => {
        const obj = {
            role: 2
        };

        axios.post("http://localhost:5000/users/rolelistening", obj)
            .then((response) => {
                const corporationData = Array.isArray(response.data.user.corporation) ? response.data.user.corporation : [];
                const corporationWithStatus = corporationData.map(corporationData => ({ ...corporationData }));
                setCorporation(corporationWithStatus);
            })
            .catch((error) => {
                console.log("error=====", error);
            });
    }, []);

    const changestatus = (id, status) => {
      
    };

    const corporationviewData = (id) => {

    };

    const handleDelete = (userId) => {
       
    };



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
            name: "Email",
            label: "Email",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Location",
            label: "Location",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Image",
            label: "Image",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value) => {
                    return <img src={value} alt="Corporation" style={{ width: '50px' }} />;
                }
            }
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    const id = tableMeta.rowData[0];
                    return (
                        <button
                            className={`btn ${value === 'active' ? 'btn-success' : 'btn-secondary'}`}
                            onClick={() => changestatus(id, value === "active" ? 1 : 0)}
                        >
                            {value === "active" ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                    );
                }
            }
        },
        {
            name: "Actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    const id = tableMeta.rowData[0];
                    return (
                        <>
                            <button
                                className="btn btn-primary"
                                onClick={() => corporationviewData(id)}
                            >
                                <FaEye />
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(id)}
                            >
                                <FaTrash />
                            </button>
                        </>
                    );
                }
            }
        },
    ];




    const options = {
        filterType: 'checkbox',
    };

    return (
        <div className="app-content content ">
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row">
                    <div className="content-header-left col-md-9 col-12 mb-2">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                {/* Add any header content here */}
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section">
                    <MUIDataTable
                        columns={columns}
                        options={options}
                    />
                </section>
            </div>
        </div>
    );
}

export default Corporation