import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Adminview() {
    const [data, setData] = useState({});
    const [error, setError] = useState('');

    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("logindata")}`,
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = () => {
        axios.get(`/adminprofile`, config)
            .then(response => {
                if (response?.data?.body) {
                    setData(response?.data?.body);
                    setError('');
                }
            })
            .catch(error => {
                setError('Error fetching user details');
                console.error(error);
            });
    };

    const handleEditClick = (e) => {
        console.log(e.target.name, '======e.target.name')
        console.log(e.target.value, '======e.target')

        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleUpdate = () => {
        const updateData = {
            name: Name,
            email: Email,

        };

        axios.post(`http://localhost:5000/update/${id}`, updateData)
            .then((reposne) => {
                console.log("response=", reposne)
            }).catch((error) => {
                console.log("error======", error)
            })
    }
    return (
        <div className="app-content content">
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row">
                    <div className="content-header-left col-md-9 col-12 mb-2">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                {/* <h2 className="content-header-title float-start mb-0">
                                    Admin all Detail
                                </h2> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9" style={{ width: "100%" }}>
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content">
                                <div
                                    role="tabpanel"
                                    className="tab-pane active"
                                    id="account-vertical-general"
                                    aria-labelledby="account-pill-general"
                                    aria-expanded="true"
                                >
                                    <form className="validate-form mt-2">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <div className="mb-1">
                                                    <label className="form-label" htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="Name"
                                                        value={data?.Name}
                                                        onChange={(e) => handleEditClick(e)}

                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="mb-1">
                                                    <label className="form-label" htmlFor="email">
                                                        E-mail
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="Email"

                                                        value={data?.Email}
                                                        onChange={(e) => handleEditClick(e)}

                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="col-12 col-sm-6">
                                                <div className="mb-1">
                                                    <label className="form-label" htmlFor="userId">
                                                        User ID
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="userId"
                                                        value={userId}
                                                        onChange={(e) => setUserId(e.target.value)}
                                                        placeholder="Enter User ID"
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <button type="button" onClick={handleUpdate} className="btn btn-primary mt-2">
                                                    Update
                                                </button>
                                                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adminview;
