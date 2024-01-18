// import React, { useState, useEffect } from "react";
// import MUIDataTable from "mui-datatables";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaToggleOn, FaToggleOff, FaEye, FaTrash } from 'react-icons/fa';
// import axios from "axios";


// function CategoryTable() {
//     const navigate = useNavigate();
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get("/finallCategory");
//             setData(response.data?.data);
//         } catch (error) {
//             console.error("Fetch error:", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             const response = await axios.delete(`/deleteCategory/${id}`);
//             if (response.status === 200) {
//                 toast.success("Category Deleted Successfully");
//                 fetchData();
//             }
//         } catch (error) {
//             console.error("Delete error:", error);
//         }
//     };

//     const changeStatus = async (currentStatus, id) => {
//         const newStatus = currentStatus === "active" ? "inactive" : "active";
//         try {
//             await axios.post(`/updatestatusCategory/${data[id - 1]?._id}`, {
//                 status: newStatus,
//             });
//             fetchData();
//             toast.success("Status Updated Successfully");
//         } catch (error) {
//             console.error("Status update error:", error);
//             toast.error("Error updating status");
//         }
//     };

//     const isActive = (status) => {
//         return status === 'active';
//     };

//     const columns = [
//         {
//             name: "serialNumber",
//             label: "S.No.",
//             options: {
//                 filter: false,
//                 sort: true,
//             },
//         },
//         {
//             name: "Category",
//             label: "Name",
//             options: {
//                 filter: true,
//                 sort: false,
//             },
//         },
//         {
//             name: "status",
//             label: "Status",
//             options: {
//                 filter: true,
//                 sort: false,
//                 customBodyRender: (value, tableMeta, updateValue) => {
//                     const item = data[tableMeta.rowIndex];
//                     return (
//                         <button
//                             className={`btn ${isActive(item.status) ? 'btn-success' : 'btn-secondary'}`}
//                             onClick={() => changeStatus(item.status, item.serialNumber)}
//                         >
//                             {isActive(item.status) ? <FaToggleOn /> : <FaToggleOff />}
//                         </button>
//                     );
//                 },
//             },
//         },
//         {
//             name: "action",
//             label: "Action",
//             options: {
//                 filter: true,
//                 sort: false,
//                 customBodyRender: (value, tableMeta, updateValue) => {
//                     const rowId = tableMeta.rowData[0];
//                     return (
//                         <>
//                             <button
//                                 className="btn btn-primary"
//                                 onClick={() => {/* your view function here */ }}
//                             >
//                                 <FaEye />
//                             </button>
//                             <button
//                                 className="btn btn-danger"
//                                 onClick={() => handleDelete(rowId)}
//                             >
//                                 <FaTrash />
//                             </button>
//                         </>
//                     );
//                 },
//             },
//         },
//     ];

//     const options = {
//         filterType: 'checkbox',
//         selectableRows: "none",
//     };

//     const modifiedData = data.map((item, index) => ({
//         ...item,
//         serialNumber: index + 1,
//     }));

//     return (
//         <>
//             <div className="app-content content ">
//                 <div className="content-overlay" />
//                 <div className="header-navbar-shadow" />
//                 <div className="content-wrapper container-xxl p-0 ">
//                     <div className="content-header ">
//                         <div className="content-header-left mb-2">
//                             <div className="breadcrumbs-top">
//                                 <div className="d-flex">
//                                     <h2
//                                         className=" content-header-title mb-1 mt-1"
//                                     >
//                                         <div style={{ width: "13rem" }}>Sport Listing</div>
//                                     </h2>
//                                     <div className="w-100 d-flex align-items-center justify-content-end">
//                                         <button
//                                             className="mr btn btn-primary me-3"
//                                             onClick={() => router("/createcategroy")}

//                                         >
//                                             Add+
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <section className="section">
//                         <MUIDataTable
//                             title={"Sport List"}
//                             data={modifiedData}
//                             columns={columns}
//                             options={options}
//                         />
//                     </section>
//                 </div>
//                 <ToastContainer
//                     position="top-right"
//                     autoClose={5000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="light"
//                 />
//                 {/* Same as */}
//                 <ToastContainer />
//             </div>
//         </>
//     );
// }

// export default CategoryTable;
