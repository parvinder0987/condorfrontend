import React, { useState } from 'react'
import axios from "axios"
import Instance from '../apis/Instance';
import swal from 'sweetalert';


const Adminchangepassword = () => {


    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const updatedpassowrd = (e)=>{
        e.preventDefault()
        if (newPassword !== confirmPassword) {
            setMessage('New passwords do not match.');
            return;
        }
        const obj = {
            oldpassword: oldPassword,
            Newpassword: newPassword,
            confrimpassword: confirmPassword
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("logindata")}`, 
                
            }
        };

        console.log(config,'---==--=-=-==-')

        axios.post("/changepassword", obj, config)
        .then((response)=>{
            swal({
                title: "Password Updated Successfully!",
                text: "Done!",
                icon: "success",
            });
            console.log("password updated", response);
            setMessage('Password updated successfully!');
        
        }).then((error)=>{
            console.log("error===",error)
        })
    }

  return (
      <div className="app-content content ">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper">
              <div className="content-header row"></div>
              <div className="content-body">
                  <div className="auth-wrapper auth-v1 px-2">
                      <div className="auth-inner py-2">
                          <div className="card mb-0">
                              <div className="card-body">
                                  <h4 className="card-title mb-1">ChangePassword🔒</h4>
                                  <form
                                      className="auth-reset-password-form mt-2"
                                      action="page-auth-login-v1.html"
                                      method="POST"
                                  >
                                      <div className="mb-1">
                                          <div className="d-flex justify-content-between">
                                              <label className="form-label" htmlFor="reset-password-new">
                                                  OldPassword
                                              </label>
                                          </div>
                                          <div className="input-group input-group-merge form-password-toggle">
                                              <input
                                                  type="password"
                                                  className="form-control form-control-merge"
                                                  id="reset-password-old"
                                                  name="reset-password-old"
                                                  placeholder="············"
                                                  aria-describedby="reset-password-old"
                                                  tabIndex={1}
                                                  autofocus=""
                                                  value={oldPassword}
                                                  onChange={(e) => setOldPassword(e.target.value)}
                                              />
                                              <span className="input-group-text cursor-pointer">
                                                  <i data-feather="eye" />
                                              </span>
                                          </div>
                                      </div>
                                      <div className="mb-1">
                                          <div className="d-flex justify-content-between">
                                              <label className="form-label" htmlFor="reset-password-new">
                                                  NewPassword
                                              </label>
                                          </div>
                                          <div className="input-group input-group-merge form-password-toggle">
                                              <input
                                                  type="password"
                                                  className="form-control form-control-merge"
                                                  id="reset-password-new"
                                                  name="reset-password-new"
                                                  placeholder="············"
                                                  aria-describedby="reset-password-new"
                                                  tabIndex={1}
                                                  autofocus=""
                                                  value={newPassword}
                                                  onChange={(e) => setNewPassword(e.target.value)}
                                              />
                                              <span className="input-group-text cursor-pointer">
                                                  <i data-feather="eye" />
                                              </span>
                                          </div>
                                      </div>
                                      <div className="mb-1">
                                          <div className="d-flex justify-content-between">
                                              <label
                                                  className="form-label"
                                                  htmlFor="reset-password-confirm"
                                              >
                                                  Confirm Password
                                              </label>
                                          </div>
                                          <div className="input-group input-group-merge form-password-toggle">
                                              <input
                                                  type="password"
                                                  className="form-control form-control-merge"
                                                  id="reset-password-confirm"
                                                  name="reset-password-confirm"
                                                  placeholder="············"
                                                  aria-describedby="reset-password-confirm"
                                                  tabIndex={2}
                                                  value={confirmPassword}
                                                  onChange={(e) => setConfirmPassword(e.target.value)}
                                              />
                                              <span className="input-group-text cursor-pointer">
                                                  <i data-feather="eye" />
                                              </span>
                                          </div>
                                      </div>
                                      <button className="btn btn-primary w-100"  onClick={updatedpassowrd} tabIndex={3}>
                                          updated
                                      </button>
                                  </form>
                                  {message && <p>{message}</p>}
                              </div>
                          </div>
                          {/* /Reset Password v1 */}
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Adminchangepassword