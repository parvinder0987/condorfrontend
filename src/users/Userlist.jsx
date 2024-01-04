import React from 'react'

const Userlist = () => {
  return (
      <div className="app-content content"> 
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper container-xxl p-0">
              <div className="content-header row">
              </div>
              <div className="content-body">
                  <section class="app-user-list">
                      <div className="card">
                          <div className="card-datatable table-responsive pt-0">
                              <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                  <div className="d-flex justify-content-between align-items-center header-actions mx-1 row mt-75">
                                      <div className="col-sm-12 col-md-4 col-lg-6">
                                          <div className="dataTables_length" id="DataTables_Table_0_length">
                                              <label>
                                                  Show{" "}
                                                  <select
                                                      name="DataTables_Table_0_length"
                                                      aria-controls="DataTables_Table_0"
                                                      className="form-select"
                                                  >
                                                      <option value={10}>10</option>
                                                      <option value={25}>25</option>
                                                      <option value={50}>50</option>
                                                      <option value={100}>100</option>
                                                  </select>{" "}
                                                  entries
                                              </label>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-8 col-lg-6 ps-xl-75 ps-0">
                                          <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end align-items-center flex-sm-nowrap flex-wrap me-1">
                                              <div className="me-1">
                                                  <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                                      <label>
                                                          Search:
                                                          <input
                                                              type="search"
                                                              className="form-control"
                                                              placeholder=""
                                                              aria-controls="DataTables_Table_0"
                                                          />
                                                      </label>
                                                  </div>
                                              </div>
                                              <div className="dt-buttons btn-group flex-wrap">
                                                  <button
                                                      className="btn add-new btn-primary mt-50"
                                                      tabIndex={0}
                                                      aria-controls="DataTables_Table_0"
                                                      type="button"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#modals-slide-in"
                                                  >
                                                      <span>Add New User</span>
                                                  </button>{" "}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <table
                                      className="user-list-table table dataTable no-footer dtr-column"
                                      id="DataTables_Table_0"
                                      role="grid"
                                      aria-describedby="DataTables_Table_0_info"
                                  >
                                      <thead className="table-light">
                                          <tr role="row">
                                              <th
                                                  className="control sorting_disabled"
                                                  rowSpan={1}
                                                  colSpan={1}
                                                  style={{ width: "26.7656px", display: "none" }}
                                                  aria-label=""
                                              />
                                              <th
                                                  className="sorting"
                                                  tabIndex={0}
                                                  aria-controls="DataTables_Table_0"
                                                  rowSpan={1}
                                                  colSpan={1}
                                                  style={{ width: "91.125px" }}
                                                  aria-label="User: activate to sort column ascending"
                                              >
                                                  id
                                              </th>
                                              <th
                                                  className="sorting sorting_desc"
                                                  tabIndex={0}
                                                  aria-controls="DataTables_Table_0"
                                                  rowSpan={1}
                                                  colSpan={1}
                                                  style={{ width: "101.203px" }}
                                                  aria-sort="descending"
                                                  aria-label="Email: activate to sort column ascending"
                                              >
                                                  Email
                                              </th>
                                              <th
                                                  className="sorting"
                                                  tabIndex={0}
                                                  aria-controls="DataTables_Table_0"
                                                  rowSpan={1}
                                                  colSpan={1}
                                                  style={{ width: "91.5625px" }}
                                                  aria-label="Role: activate to sort column ascending"
                                              >
                                                  location
                                              </th>
                                              <th
                                                  className="sorting"
                                                  tabIndex={0}
                                                  aria-controls="DataTables_Table_0"
                                                  rowSpan={1}
                                                  colSpan={1}
                                                  style={{ width: "92.2188px" }}
                                                  aria-label="Plan: activate to sort column ascending"
                                              >
                                                 Image
                                              </th>
                                              <th
                                                  className="sorting"
                                                  tabIndex={0}
                                                  aria-controls="DataTables_Table_0"
                                                  rowSpan={1}
                                                  colSpan={1}
                                                  style={{ width: "114.094px" }}
                                                  aria-label="Status: activate to sort column ascending"
                                              >
                                                  Status
                                              </th>
                                              <th
                                                  className="sorting_disabled"
                                                  rowSpan={1}
                                                  colSpan={1}
                                                  style={{ width: "124.031px" }}
                                                  aria-label="Actions"
                                              >
                                                  Actions
                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr className="odd">
                                          </tr>
                                      </tbody>
                                  </table>
                                  <div className="d-flex justify-content-between mx-2 row mb-1">
                                      <div className="col-sm-12 col-md-6">
                                          <div
                                              className="dataTables_info"
                                              id="DataTables_Table_0_info"
                                              role="status"
                                              aria-live="polite"
                                          >
                                              Showing 0 to 0 of 0 entries
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-6">
                                          <div
                                              className="dataTables_paginate paging_simple_numbers"
                                              id="DataTables_Table_0_paginate"
                                          >
                                              <ul className="pagination">
                                                  <li
                                                      className="paginate_button page-item previous disabled"
                                                      id="DataTables_Table_0_previous"
                                                  >
                                                      <a
                                                          href="#"
                                                          aria-controls="DataTables_Table_0"
                                                          data-dt-idx={0}
                                                          tabIndex={0}
                                                          className="page-link"
                                                      >
                                                          &nbsp;
                                                      </a>
                                                  </li>
                                                  <li
                                                      className="paginate_button page-item next disabled"
                                                      id="DataTables_Table_0_next"
                                                  >
                                                      <a
                                                          href="#"
                                                          aria-controls="DataTables_Table_0"
                                                          data-dt-idx={1}
                                                          tabIndex={0}
                                                          className="page-link"
                                                      >
                                                          &nbsp;
                                                      </a>
                                                  </li>
                                              </ul>
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

export default Userlist