import React from 'react'

const Edit = () => {
  return (
      <div className="app-content content ">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper container-xxl p-0">
              <div className="content-header row"></div>
              <div className="content-body">
                  {/* users edit start */}
                  <section className="app-user-edit">
                      <div className="card">
                          <div className="card-body">
                              <ul className="nav nav-pills" role="tablist">
                                  <li className="nav-item">
                                      <a
                                          className="nav-link d-flex align-items-center active"
                                          id="account-tab"
                                          data-bs-toggle="tab"
                                          href="#account"
                                          aria-controls="account"
                                          role="tab"
                                          aria-selected="true"
                                      >
                                          <i data-feather="user" />
                                          <span className="d-none d-sm-block">Account</span>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a
                                          className="nav-link d-flex align-items-center"
                                          id="information-tab"
                                          data-bs-toggle="tab"
                                          href="#information"
                                          aria-controls="information"
                                          role="tab"
                                          aria-selected="false"
                                      >
                                          <i data-feather="info" />
                                          <span className="d-none d-sm-block">Information</span>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a
                                          className="nav-link d-flex align-items-center"
                                          id="social-tab"
                                          data-bs-toggle="tab"
                                          href="#social"
                                          aria-controls="social"
                                          role="tab"
                                          aria-selected="false"
                                      >
                                          <i data-feather="share-2" />
                                          <span className="d-none d-sm-block">Social</span>
                                      </a>
                                  </li>
                              </ul>
                              <div className="tab-content">
                                  {/* Account Tab starts */}
                                  <div
                                      className="tab-pane active"
                                      id="account"
                                      aria-labelledby="account-tab"
                                      role="tabpanel"
                                  >
                                      {/* users edit start */}
                                      <div className="d-flex mb-2">
                                          <img
                                              src="../../../app-assets/images/avatars/7.png"
                                              alt="users avatar"
                                              className="user-avatar users-avatar-shadow rounded me-2 my-25 cursor-pointer"
                                              height={90}
                                              width={90}
                                          />
                                          {/* <div className="mt-50">
                                              <h4>Eleanor Aguilar</h4>
                                              <div className="col-12 d-flex mt-1 px-0">
                                                  <label
                                                      className="btn btn-primary me-75 mb-0"
                                                      htmlFor="change-picture"
                                                  >
                                                      <span className="d-none d-sm-block">Change</span>
                                                      <input
                                                          className="form-control"
                                                          type="file"
                                                          id="change-picture"
                                                          hidden=""
                                                          accept="image/png, image/jpeg, image/jpg"
                                                      />
                                                      <span className="d-block d-sm-none">
                                                          <i className="me-0" data-feather="edit" />
                                                      </span>
                                                  </label>
                                                  <button className="btn btn-outline-secondary d-none d-sm-block">
                                                      Remove
                                                  </button>
                                                  <button className="btn btn-outline-secondary d-block d-sm-none">
                                                      <i className="me-0" data-feather="trash-2" />
                                                  </button>
                                              </div>
                                          </div> */}
                                      </div>
                                      {/* users edit ends */}
                                      {/* users edit account form start */}
                                      <form className="form-validate">
                                          <div className="row">
                                              {/* <div className="col-md-4">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="username">
                                                          Username
                                                      </label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="Username"
                                                          defaultValue="eleanor.aguilar"
                                                          name="username"
                                                          id="username"
                                                      />
                                                  </div>
                                              </div> */}
                                              <div className="col-md-4">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="name">
                                                          Name
                                                      </label>
                                                      <input
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="Name"
                                                          defaultValue="Eleanor Aguilar"
                                                          name="name"
                                                          id="name"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-md-4">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="email">
                                                          E-mail
                                                      </label>
                                                      <input
                                                          type="email"
                                                          className="form-control"
                                                          placeholder="Email"
                                                          defaultValue="eleanor.aguilar@gmail.com"
                                                          name="email"
                                                          id="email"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-md-4">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="status">
                                                          Status
                                                      </label>
                                                      <select className="form-select" id="status">
                                                          <option>Active</option>
                                                          <option>Blocked</option>
                                                          <option>Deactivated</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="col-md-4">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="role">
                                                          Role
                                                      </label>
                                                      <select className="form-select" id="role">
                                                          <option>Admin</option>
                                                          <option>User</option>
                                                          <option>Staff</option>
                                                      </select>
                                                  </div>
                                              </div>
                                 
                                              {/* <div className="col-12">
                                                  <div className="table-responsive border rounded mt-1">
                                                      <h6 className="py-1 mx-1 mb-0 font-medium-2">
                                                          <i
                                                              data-feather="lock"
                                                              className="font-medium-3 me-25"
                                                          />
                                                          <span className="align-middle">Permission</span>
                                                      </h6>
                                                      <table className="table table-striped table-borderless">
                                                          <thead className="table-light">
                                                              <tr>
                                                                  <th>Module</th>
                                                                  <th>Read</th>
                                                                  <th>Write</th>
                                                                  <th>Create</th>
                                                                  <th>Delete</th>
                                                              </tr>
                                                          </thead>
                                                          <tbody>
                                                              <tr>
                                                                  <td>Admin</td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="admin-read"
                                                                              defaultChecked=""
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="admin-read"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="admin-write"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="admin-write"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="admin-create"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="admin-create"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="admin-delete"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="admin-delete"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td>Staff</td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="staff-read"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="staff-read"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="staff-write"
                                                                              defaultChecked=""
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="staff-write"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="staff-create"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="staff-create"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="staff-delete"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="staff-delete"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td>Author</td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="author-read"
                                                                              defaultChecked=""
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="author-read"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="author-write"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="author-write"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="author-create"
                                                                              defaultChecked=""
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="author-create"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="author-delete"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="author-delete"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td>Contributor</td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="contributor-read"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="contributor-read"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="contributor-write"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="contributor-write"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="contributor-create"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="contributor-create"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="contributor-delete"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="contributor-delete"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td>User</td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="user-read"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="user-read"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="user-create"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="user-create"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="user-write"
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="user-write"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              className="form-check-input"
                                                                              id="user-delete"
                                                                              defaultChecked=""
                                                                          />
                                                                          <label
                                                                              className="form-check-label"
                                                                              htmlFor="user-delete"
                                                                          />
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </div>
                                              </div> */}
                                              <div className="col-12 d-flex flex-sm-row flex-column mt-2">
                                                  <button
                                                      type="submit"
                                                      className="btn btn-primary mb-1 mb-sm-0 me-0 me-sm-1"
                                                  >
                                                      Save Changes
                                                  </button>
                                                  <button
                                                      type="reset"
                                                      className="btn btn-outline-secondary"
                                                  >
                                                      Reset
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                      {/* users edit account form ends */}
                                  </div>
                                  {/* Account Tab ends */}
                                  {/* Information Tab starts */}
                                  <div
                                      className="tab-pane"
                                      id="information"
                                      aria-labelledby="information-tab"
                                      role="tabpanel"
                                  >
                                      {/* users edit Info form start */}
                                      <form className="form-validate">
                                          <div className="row mt-1">
                                              <div className="col-12">
                                                  <h4 className="mb-1">
                                                      <i
                                                          data-feather="user"
                                                          className="font-medium-4 me-25"
                                                      />
                                                      <span className="align-middle">
                                                          Personal Information
                                                      </span>
                                                  </h4>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="birth">
                                                          Birth date
                                                      </label>
                                                      <input
                                                          id="birth"
                                                          type="text"
                                                          className="form-control birthdate-picker"
                                                          name="dob"
                                                          placeholder="YYYY-MM-DD"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="mobile">
                                                          Mobile
                                                      </label>
                                                      <input
                                                          id="mobile"
                                                          type="text"
                                                          className="form-control"
                                                          defaultValue={+6595895857}
                                                          name="phone"
                                                      />
                                                  </div>
                                              </div>
                                              {/* <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="website">
                                                          Website
                                                      </label>
                                                      <input
                                                          id="website"
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="Website here..."
                                                          defaultValue="https://rowboat.com/insititious/Angelo"
                                                          name="website"
                                                      />
                                                  </div>
                                              </div> */}
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="languages">
                                                          Languages
                                                      </label>
                                                      <select id="languages" className="form-select">
                                                          <option value="English">English</option>
                                                          <option value="Spanish">Spanish</option>
                                                          <option value="French" selected="">
                                                              French
                                                          </option>
                                                          <option value="Russian">Russian</option>
                                                          <option value="German">German</option>
                                                          <option value="Arabic">Arabic</option>
                                                          <option value="Sanskrit">Sanskrit</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="d-block form-label mb-1">
                                                          Gender
                                                      </label>
                                                      <div className="form-check form-check-inline">
                                                          <input
                                                              type="radio"
                                                              id="male"
                                                              name="gender"
                                                              className="form-check-input"
                                                          />
                                                          <label className="form-check-label" htmlFor="male">
                                                              Male
                                                          </label>
                                                      </div>
                                                      <div className="form-check form-check-inline">
                                                          <input
                                                              type="radio"
                                                              id="female"
                                                              name="gender"
                                                              className="form-check-input"
                                                              defaultChecked=""
                                                          />
                                                          <label className="form-check-label" htmlFor="female">
                                                              Female
                                                          </label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="d-block form-label mb-1">
                                                          Contact Options
                                                      </label>
                                                      <div className="form-check form-check-inline">
                                                          <input
                                                              type="checkbox"
                                                              className="form-check-input"
                                                              id="email-cb"
                                                              defaultChecked=""
                                                          />
                                                          <label
                                                              className="form-check-label"
                                                              htmlFor="email-cb"
                                                          >
                                                              Email
                                                          </label>
                                                      </div>
                                                      <div className="form-check form-check-inline">
                                                          <input
                                                              type="checkbox"
                                                              className="form-check-input"
                                                              id="message"
                                                              defaultChecked=""
                                                          />
                                                          <label className="form-check-label" htmlFor="message">
                                                              Message
                                                          </label>
                                                      </div>
                                                      <div className="form-check form-check-inline">
                                                          <input
                                                              type="checkbox"
                                                              className="form-check-input"
                                                              id="phone"
                                                          />
                                                          <label className="form-check-label" htmlFor="phone">
                                                              Phone
                                                          </label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-12">
                                                  <h4 className="mb-1 mt-2">
                                                      <i
                                                          data-feather="map-pin"
                                                          className="font-medium-4 me-25"
                                                      />
                                                      <span className="align-middle">Address</span>
                                                  </h4>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="address-1">
                                                          Address Line 1
                                                      </label>
                                                      <input
                                                          id="address-1"
                                                          type="text"
                                                          className="form-control"
                                                          defaultValue="A-65, Belvedere Streets"
                                                          name="address"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="address-2">
                                                          Address Line 2
                                                      </label>
                                                      <input
                                                          id="address-2"
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="T-78, Groove Street"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="postcode">
                                                          Postcode
                                                      </label>
                                                      <input
                                                          id="postcode"
                                                          type="text"
                                                          className="form-control"
                                                          placeholder={597626}
                                                          name="zip"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="city">
                                                          City
                                                      </label>
                                                      <input
                                                          id="city"
                                                          type="text"
                                                          className="form-control"
                                                          defaultValue="New York"
                                                          name="city"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="state">
                                                          State
                                                      </label>
                                                      <input
                                                          id="state"
                                                          type="text"
                                                          className="form-control"
                                                          name="state"
                                                          placeholder="Manhattan"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6">
                                                  <div className="mb-1">
                                                      <label className="form-label" htmlFor="country">
                                                          Country
                                                      </label>
                                                      <input
                                                          id="country"
                                                          type="text"
                                                          className="form-control"
                                                          name="country"
                                                          placeholder="United States"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-12 d-flex flex-sm-row flex-column mt-2">
                                                  <button
                                                      type="submit"
                                                      className="btn btn-primary mb-1 mb-sm-0 me-0 me-sm-1"
                                                  >
                                                      Save Changes
                                                  </button>
                                                  <button
                                                      type="reset"
                                                      className="btn btn-outline-secondary"
                                                  >
                                                      Reset
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                      {/* users edit Info form ends */}
                                  </div>
                                  {/* Information Tab ends */}
                                  {/* Social Tab starts */}
                                  <div
                                      className="tab-pane"
                                      id="social"
                                      aria-labelledby="social-tab"
                                      role="tabpanel"
                                  >
                                      {/* users edit social form start */}
                                      <form className="form-validate">
                                          <div className="row">
                                              <div className="col-lg-4 col-md-6 mb-1">
                                                  <label className="form-label" htmlFor="twitter-input">
                                                      Twitter_id
                                                  </label>
                                                  <div className="input-group input-group-merge">
                                                      <span className="input-group-text" id="basic-addon3">
                                                          <i data-feather="twitter" className="font-medium-2" />
                                                      </span>
                                                      <input
                                                          id="twitter-input"
                                                          type="text"
                                                          className="form-control"
                                                          defaultValue="https://www.twitter.com/adoptionism744"
                                                          placeholder="https://www.twitter.com/"
                                                          aria-describedby="basic-addon3"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6 mb-1">
                                                  <label className="form-label" htmlFor="facebook-input">
                                                      Facebook_id
                                                  </label>
                                                  <div className="input-group input-group-merge">
                                                      <span className="input-group-text" id="basic-addon4">
                                                          <i
                                                              data-feather="facebook"
                                                              className="font-medium-2"
                                                          />
                                                      </span>
                                                      <input
                                                          id="facebook-input"
                                                          type="text"
                                                          className="form-control"
                                                          defaultValue="https://www.facebook.com/adoptionism664"
                                                          placeholder="https://www.facebook.com/"
                                                          aria-describedby="basic-addon4"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6 mb-1">
                                                  <label className="form-label" htmlFor="instagram-input">
                                                      Instagram_id
                                                  </label>
                                                  <div className="input-group input-group-merge">
                                                      <span className="input-group-text" id="basic-addon5">
                                                          <i
                                                              data-feather="instagram"
                                                              className="font-medium-2"
                                                          />
                                                      </span>
                                                      <input
                                                          id="instagram-input"
                                                          type="text"
                                                          className="form-control"
                                                          defaultValue="https://www.instagram.com/adopt-ionism744"
                                                          placeholder="https://www.instagram.com/"
                                                          aria-describedby="basic-addon5"
                                                      />
                                                  </div>
                                              </div>
                                      
                                              <div className="col-12 d-flex flex-sm-row flex-column mt-2">
                                                  <button
                                                      type="submit"
                                                      className="btn btn-primary mb-1 mb-sm-0 me-0 me-sm-1"
                                                  >
                                                      Save Changes
                                                  </button>
                                                  <button
                                                      type="reset"
                                                      className="btn btn-outline-secondary"
                                                  >
                                                      Reset
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                      {/* users edit social form ends */}
                                  </div>
                                  {/* Social Tab ends */}
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* users edit ends */}
              </div>
          </div>
      </div>

  )
}

export default Edit