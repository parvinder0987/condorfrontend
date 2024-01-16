import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import axios from 'axios';

const College = () => {
    const [data, setData] = useState([]);
    const [singleCollege, setSingleCollege] = useState(null);
    const [collegeId, setCollegeId] = useState(''); 

    useEffect(() => {
        if (collegeId) {
            axios.get(`http://localhost:5000/users/collegedata/${collegeId}`)
                .then(response => {
                    setSingleCollege(response.data.getdata);
                })
                .catch(error => {
                    console.error('Error fetching single college', error);
                });
        }
    }, [collegeId]); 

    const handleCollegeIdChange = (e) => {
        setCollegeId(e.target.value);
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

                <input
                    type="text"
                    value={collegeId}
                    onChange={handleCollegeIdChange}
                    placeholder="Enter College ID"
                />
                <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        </>
    );
};

export default College
