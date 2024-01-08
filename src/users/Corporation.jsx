// import { response } from 'express'
import React, { useEffect, useState } from 'react'
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import swal from "sweetalert";



const Corporation = () => {

    const [corporation, setCorporation] = useState([]);

    useEffect(() => {
        const obj = {
            role: 2
        };

        axios.post("http://localhost:5000/users/rolelistening", obj)
            .then((response) => {
                console.log("response=========", response.data.user)
                setCorporation(...corporation, response.data.user);
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
        const data = {
            id: userId
        }

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });


                    axios.delete("http://localhost:5000/users/deleteuser", { data })
                        .then((response) => {
                            
                            console.log("data will be deleted", response.data.user)
                        }).catch((error) => {
                            console.log("please check the code", error)
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    };

    const tableData = [];
    for (let i = 0; i < corporation.length; i++) {
        const row = [];
        const { Email, location, image, status } = corporation[i];
        row.push(i + 1, Email, location, image, status);
        tableData.push(row)

    }


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
            label: "IMAGE",
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
        selectableRows: "none",
        
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
                                
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section">
                    <MUIDataTable
                        columns={columns}
                        options={options}
                        data={tableData}
                    />
                </section>
            </div>
        </div>
    );
}

export default Corporation