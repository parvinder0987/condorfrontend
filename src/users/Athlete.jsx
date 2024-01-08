import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { FaToggleOn, FaToggleOff, FaEye, FaTrash } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Athlete() {
    const router = useNavigate();
    const [athlete, setAthlete] = useState([]);

    const abc = {
        role: 1
    }

    useEffect(() => {
        axios.post("http://localhost:5000/users/rolelistening", abc)
            .then((response) => {
                console.log("response=========", response.data)
                setAthlete(response.data.user);

            }).catch((error) => {
                console.log(error, "error========")
            })
    }, [])

    const changestatus = (id, status) => {
        // Your implementation for changing status
    };

    const atheleteviewData = (id) => {
        sessionStorage.setItem("userID", id);
        router("/view");
    };

    const handleDelete = (athleteId) => {
        const data = {
            id: athleteId
        };

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
                            // Update state after successful deletion
                            const updatedAthlete = athlete.filter(obj => obj.id !== athleteId);
                            setAthlete(updatedAthlete);

                            console.log("data will be deleted", response.data.user);
                        }).catch((error) => {
                            console.log("please check the code", error);
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    };

    const Tabledata = athlete.map((item, index) => {
        const { Email, location, image, status } = item;
        return [index + 1, Email, location, image, status];
    });

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
            },
        },
        {
            name: "location",
            label: "Location",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Image",
            label: "Image",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value) => {
                    return <img src={value} alt="Athlete" style={{ width: '50px' }} />;
                },
            },
        },
        {
            name: "status",
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
                },
            },
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
                                onClick={() => atheleteviewData(id)}
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
                },
            },
        },
    ];

    const options = {
        selectableRows: "none",
    };

    return (
        <>
            <div className="app-content content">
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
                            data={Tabledata}
                        />
                    </section>
                </div>
            </div>
        </>
    );
}

export default Athlete;
