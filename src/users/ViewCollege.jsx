import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewCollege = () => {

    const req = useLocation();
    const [user, setUser] = useState({
        college: "",
        status: ""
    });

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            let id = req?.search;
            id = id.split('=')[1];
            axios.get(`http://localhost:5000/users/collegeview/${id}`)
                .then((response) => {
                    console.log("response==>", response);
                    setUser(response.data);
                })
                .catch((error) => {
                    console.log("error===>", error);
                });
        } else {
            console.log("No user ID found");
        }
    }, [req?.search]);

    const handleEditClick = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleupdate = () => {
        const updateData = {
            college: user.college,
            status: user.status,
            page: "college"
        };

        axios.post(`http://localhost:5000/users/updated/${req?.search.split('=')[1]}`, updateData)
            .then((response) => {
                console.log(response, "response=>");
                toast.success("Data updated successfully");
            })
            .catch((error) => {
                console.log(error, "error=>");
                toast.error("Failed to update data");
            });
    }

    return (
        <div className="app-content content">
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row"></div>
                <div className="content-body">
                    <section className="app-user-view">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                <div className="card user-card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12 mt-2 mt-xl-0">
                                                <div className="user-info-wrapper">

                                                    <div className="form-group">
                                                        <label className="user-info-title fw-bold">College</label>
                                                        <input
                                                            type="text"
                                                            name="college"
                                                            className="form-control"
                                                            value={user.college}
                                                            onChange={(e) => handleEditClick(e)}


                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="user-info-title fw-bold">Status</label>
                                                        <input
                                                            type="text"
                                                            name="status"
                                                            className="form-control"
                                                            value={user.status}
                                                            onChange={(e) => handleEditClick(e)}

                                                            r
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 d-flex flex-column justify-content-between border-container-lg">

                                                <div className="d-flex flex-wrap">
                                                    <a href="" className="btn btn-primary" onClick={handleupdate}>
                                                        update
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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
    )
}

export default ViewCollege