
import React, { useEffect, useState } from 'react'
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';



const Corporation = () => {
    const router = useNavigate("")

    const [corporation, setCorporation] = useState([]);

//data show in table
    const data = async () => {
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
    }
    //data show in table end 

    
    const changestatus = async (id, currentStatus) => {
        try {
            const response = await axios.post('http://localhost:5000/users/statuschange', {
                id,
                Status: currentStatus === 1 ? 0 : 1
            });

            console.log("Status updated:", response.data);
            toast.success("Status updated successfully!");
            return response.data;
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Error updating status");
            throw error;
        }
    };

    
    const corporationviewData = (id) => {
        router(`/view?id=${id}`)
    };
    
    // deleted data 
    useEffect(() => {
        data()
    }, []);
    const handleDelete = (userId) => {
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


                    axios.delete(`http://localhost:5000/users/deleteuser/${userId}`,)
                        .then((response) => {

                            data()

                        }).catch((error) => {
                            console.log("please check the code", error)
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    };
    // deleted data end

    // userviewtable and here data

    const tableData = [];
    for (let i = 0; i < corporation.length; i++) {
        const row = [];
        const { Email, location, image, status, id } = corporation[i];


        const Action = <>
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
        const value = status
        const Status  =  <button
            className={`btn ${value === 'active' ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => changestatus(id, value === "active" ? 1 : 0)}
        >
            {value === "active" ? <FaToggleOn /> : <FaToggleOff />}
        </button>
        const Image = <img src={image} />
        row.push(i + 1);
        row.push(Email)
        row.push(location)
        row.push(Image)
        row.push(Status)
        row.push(Action)
        tableData.push(row)

    }
    // / userviewtable and here data end

// columns
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
                customBodyRender: (value, tableMeta, updateValue) => {
                    return value; 
                }
            }
        },
        {
            name: "Actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
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
    );
}

export default Corporation