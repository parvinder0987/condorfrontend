import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Logout = () => {
    const router = useNavigate();

    const handleLogout = () => {
        swal({
            title: "Are you sure?",
            text: "Once logged out, you will need to login again to access your account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willLogout) => {
                if (willLogout) {
                    sessionStorage.clear("logindata");
                    swal("You have been logged out successfully!", {
                        icon: "success",
                    });
                    router("/");
                } else {
                    swal("Your session is safe!");
                }
            });
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
