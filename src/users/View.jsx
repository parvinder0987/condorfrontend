import React, { useState } from 'react'

const View = () => {
    const [user, setUser] = useState({
        role: 1,
    });

    useEffect(() => {
        const userId = 123
        axios.get(`http://localhost:5000/users/${userId}`)
            .then((response) => {
                setUser(response.data.user);
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
            });
    }, []); 
    const renderUserRoleDetails = () => {
        switch (user.role) {
            case 1:
                return (
                    <div>
                        <h4>Details for Role 1</h4>
                        <div className="form-group">
                            <label className="user-info-title fw-bold">Name</label>
                            <input type="text" className="form-control" value={user.name} readOnly />
                        </div>
                    </div>
                );
        }
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
                                                  {renderUserRoleDetails()}
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Name</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value="eleanor.aguilar"
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Email</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value="--@gmail.com"
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">location</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value="Admin"
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Phonenumber</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value="000000000"
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">bio</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value=""
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">Price</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value=""
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">College</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value="enter college"
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">tiktok_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value=""
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">insta_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value=""
                                                          readOnly
                                                      />
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="user-info-title fw-bold">twitter_Id</label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          value=""
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
                                                              <h4 className="mb-0">Eleanor Aguilar</h4>
                                                              <span className="card-text">
                                                                  eleanor.aguilar@gmail.com
                                                              </span>
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