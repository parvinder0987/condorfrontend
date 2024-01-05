import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { FaToggleOn, FaToggleOff, FaEye, FaTrash } from 'react-icons/fa';
import axios from "axios";

function Athlete() {
    const [athlete, setAthlete] = useState([]);

    useEffect(() => {
        const abc = {
            role: 1
        }
        axios.post("http://localhost:5000/users/rolelistening", abc)
            .then((response) => {
                console.log("response=========", response.data.user)
                
                // const athleteWithStatus = response.data.athlete.map((athleteData) => ({
                //     ...athleteData,
                // }));
                setAthlete(...athlete, response.data.user);
            }).catch((error) => {
                console.log(error, "error========")
            })
    }, [])

    const changestatus = (id, status) => {
    };

    const corporationviewData = (id) => {

    };

    const handleDelete = (athleteId) => {

    };

    
        athlete.forEach((e) => {


        })
    

    const columns = [
        {
            name: "serialNumber",
            label: "ID",
            options: {
                display: false,
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
                },
            },
        },
    ];

    const options = {
        filterType: 'checkbox',
    };
    console.log(athlete) 

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
                    />
                </section>
            </div>
        </div>
        </>

    );
}

export default Athlete;
