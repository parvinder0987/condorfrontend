import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
const View = () => {
    const req = useLocation();
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        location: '',
        Phonenumber: '',
        bio: '',
        price: '',
        college: '',
        tiktokId: '',
        instaId: '',
        twitterId: ''
    });

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            let id = req?.search;
            id = id.split('=')[1];  
            axios.get(`http://localhost:5000/users/viewdata/${id}`)
                .then((response) => {
                    console.log("response==>", response);
                    setUser(response.data);
                }).catch((error) => {
                    console.log("error===>", error);
                });
        } else {
            console.log("No user ID found");
        }
    }, []);

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
                                                      <label className="user-info-title fw-bold">Name</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.Name}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Email</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.Email}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">location</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.location}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Phonenumber</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.Phonenumber}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">bio</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.bio}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Price</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.price}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">College</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.college}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">tiktok_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.tiktokId}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">insta_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.instaId}
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">twitter_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.twitterId}
                                                          readOnly
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-xl-6 col-lg-12 d-flex flex-column justify-content-between border-container-lg">
                                              <div className="user-avatar-section">
                                                  <div className="d-flex justify-content-start">
                                                      <img
                                                          className="img-fluid rounded"
                                                          src="../../../app-assets/images/avatars/7.png"
                                                          height={104}
                                                          width={104}
                                                          alt="User avatar"
                                                      />
                                                      <div className="d-flex flex-column ms-1">
                                                          <div className="user-info mb-1">
                                                              {/* <h4 className="mb-0">Eleanor Aguilar</h4> */}
                                                              {/* <span className="card-text">
                                                                  eleanor.aguilar@gmail.com
                                                              </span> */}
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-center user-total-numbers">
                                                  {/* ... (monthly sales and annual profit) */}
                                              </div>
                                              <div className="d-flex flex-wrap">
                                                  <a href="/editdetails" className="btn btn-primary">
                                                      Edit
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
      </div>

  )
}

export default View