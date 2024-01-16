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
        tiktok_Id: '',
        insta_Id: '',
        twitter_Id: '',
        profile_pic:''
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

      const handleInputChange = (e) => {
          setUser({ ...user, [e.target.Name]: e.target.value });
    };


    const updateData = (e) => {
        e.preventDefault();
        console.log("Updated data", user);
    };
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
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Email</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.Email}
                                                          onChange={(e)=>handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">location</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.location}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Phonenumber</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.Phonenumber}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">bio</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.bio}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Price</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.price}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">College</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.college}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">tiktok_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.tiktok_Id}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">insta_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.insta_Id}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">twitter_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value={user.twitter_Id}
                                                          onChange={(e) => handleInputChange(e)}
                                                          
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-xl-6 col-lg-12 d-flex flex-column justify-content-between border-container-lg">
                                              <div className="user-avatar-section">
                                                  <div className="d-flex justify-content-start">
                                                      <img
                                                          className="img-fluid rounded"
                                                          src={location.protocol+"//"+location.hostname + ":5000/images/users/"+user.profile_pic}
                                                          height={104}
                                                          width={104}
                                                          alt="User avatar"
                                                      />
                                                      {console.log('http://' + location.protocol + ":5000/images/users/",'=-=-=--=-=hsot')}
                                                      <div className="d-flex flex-column ms-1">
                                                          <div className="user-info mb-1">
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-center user-total-numbers">
                                                
                                              </div>
                                              <div className="d-flex flex-wrap">
                                                  <a href="" onClick={updateData} className="btn btn-primary">
                                                    Update
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