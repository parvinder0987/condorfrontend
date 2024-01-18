import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";


const College = () => {
    const router = useNavigate();
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5000/users/colleges`)
            .then(response => {
                const formattedData = response.data.map((item, index) => ({
                    id: item.id,
                    "Sr.no": index + 1,
                    "name": item.college,
                    "status": item.status
                }));
                setData(formattedData);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [refresh]);

    const collegeviewData = (id) => {
        router(`/collegeview?id=${id}`);
    };

    const handleDelete = (collegeId) => {
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

                    axios.delete(`http://localhost:5000/users/deletedata/${collegeId}`)
                        .then((response) => {
                            data();
                        }).catch((error) => {
                            console.log("please check the code", error);
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    };

    const changestatus = async (id, currentStatus) => {
        try {
            setRefresh(false)
            const newStatus = currentStatus === '0' ? '1' : '0';


            const response = await axios.post('http://localhost:5000/users/chnagestatus', {
                id: id,
                Status: newStatus
            });
            // setIsStatus(false)

            toast.success("Status updated successfully!");
            setRefresh(true)
          
            

            return response.data;
        } catch (error) {
            console.error("Error updating status:", error);
            throw error;
        }
    };

    const isActive = (status) => status == 1;
    const renderStatusButton = (item) => (

        <button
            className={`btn ${isActive(item.status) ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => changestatus(item[0], item[2])}
        >
            {isActive(item[2]) ? <FaToggleOn /> : <FaToggleOff />}
        </button>
    );

    const columns = [
        {
            name: "Sr.no",
            label: "Sr. No",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "status",
            label: "Status",
            options: {
                customBodyRender: (value, tableMeta) => {
                    return renderStatusButton(tableMeta.rowData);
                }
            },
        },
        {
            name: "Actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    const rowId = tableMeta.rowData[0];
                    return (
                        <>
                            <button
                                className="btn btn-primary"
                                onClick={() => collegeviewData(rowId)}
                            >
                                <FaEye />
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(rowId)}
                            >
                                <FaTrash />
                            </button>
                        </>
                    );
                }
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
                                    {/* Content header */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                    />
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

export default College;
