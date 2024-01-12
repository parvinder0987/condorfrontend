import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { FaToggleOn, FaToggleOff, FaEye, FaTrash } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Athlete() {
    const router = useNavigate();
    const [athlete, setAthlete] = useState([]);
    const [isActive, setIsActive] = useState(true)
    const [isStatus, setIsStatus] = useState(false)

    const data = async () => {
        const abc = {
            role: 1
        }
        axios.post("http://localhost:5000/users/rolelistening", abc)
            .then((response) => {
                console.log("response=========", response.data)
                setAthlete(response.data.user);

            }).catch((error) => {
                console.log(error, "error========")
            })
    }


    const changestatus = async (id, currentStatus) => {
        try {
            setIsStatus(true)
            const newStatus = currentStatus === 0 ? 1 : 0; 
            const response = await axios.post('http://localhost:5000/users/statuschange', {
                id,
                Status: newStatus
            });

            console.log("Status updated:", response.data);
            setIsStatus(false)
            toast.success("Status updated successfully!");
            setAthlete(athlete.map(a => {
                if (a.id === id) {
                    return { ...a, status: newStatus };
                }
                return a;   
            }));

            return response.data;
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Error updating status");
            throw error;
        }
    };

    
    const atheleteviewData = (id) => {
        router(`/view?id=${id}`)
    };

    // deleted start
    useEffect(() => {
        data()
    }, [isStatus])
    const handleDelete = (athleteId) => {

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

                    axios.delete(`http://localhost:5000/users/deleteuser/${athleteId}`)
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
// deleted end  

//view data in table and  
    const Tabledata = [];
    for (let i = 0; i < athlete.length; i++) {
        const row = [];
        const { Email, location, image, Status, id } = athlete[i];
        

        const Action = <>
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
        const isActive = Status === 1;
        
        const status = <button
            className={`btn ${isActive ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => changestatus(id, Status)}
        >
            {isActive ? <FaToggleOn /> : <FaToggleOff />}
        </button>
        const Image = <img src={image} />
        row.push(i + 1);
        row.push(Email)
        row.push(location)
        row.push(Image)
        row.push(status)
        row.push(Action)
        Tabledata.push(row)

    }
    //  view data end 

    // colums field start 

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
            },
        },
        {
            name: "Actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
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

export default Athlete;
