import React from 'react'
import MUIDataTable from "mui-datatables";


const College = () => {


    const columns = [
        {
            name: "Sr.no",
            label: "sr.no",
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
      <MUIDataTable
        //   data={data}
          columns={columns}
          options={options}
      />
              </div>
          </div>
      </>
  )
}

export default College