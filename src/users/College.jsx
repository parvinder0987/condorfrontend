import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import axios  from 'axios';
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const College = () => {
    const router = useNavigate();
    const [data, setData] = useState([]);
    const[id, setId] = useState("");
    const [isStatus, setIsStatus] = useState(false)
    const [college, setCollege] = useState([])


    useEffect(() => {
      const abc = {
        id:id
      }
        axios.get(`http://localhost:5000/users/colleges/${id}`)
            .then(response => {
       
                const formattedData = response.data.map((item, index) => ({
                    "Sr.no": index + 1,
                    "name": item.college, 
                    "status": item.status
                }));
                setData(formattedData);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    const atheleteviewData = (id) => {
        router(`/collegeview?id=${id}`)
    };

    const handleDelete = (id) => {
    
    };

    const changestatus = async (id, currentStatus) => {
        try {
            setIsStatus(true)
            const newStatus = currentStatus === 0 ? 1 : 0;
            const response = await axios.post('http://localhost:5000/users/chnagestatus', {
                id,
                Status: newStatus
            });

            console.log("Status updated:", response.data);
            setIsStatus(false)
            toast.success("Status updated successfully!");
            setCollege(college.map(a => {
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
                customBodyRender: (value, tableMeta, updateValue) => {
                    const isActive = value === 1;
                    return (
                        <button
                            className={`btn ${isActive ? 'btn-success' : 'btn-secondary'}`}
                            onClick={() => changestatus(tableMeta.rowData[0], value)}
                        >
                            {isActive ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                    );
                }
            },
        },
        {
            name: "Actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowId = tableMeta.rowData[0];
                    return (
                        <>
                            <button
                                className="btn btn-primary"
                                onClick={() => atheleteviewData(rowId)}
                            >
                                <FaEye />
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(rowId)}
                            >
                                <FaTrash />
                            </button>
                        </>
                    );
                }
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
      
          data={data}
          columns={columns}
          options={options}
      />
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
  )
}

export default College