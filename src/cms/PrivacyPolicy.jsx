import React, { useEffect, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import { http } from "../../axios";  
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PrivacyPolicy() {
    const [abouts, setAbouts] = useState({
        Title: "",
        Content: "",
    });

    const Aboustgethandle = async () => {
        try {
            const response = await axios.get("/users/privacy");
            const data = response.data.data;
            setAbouts(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        Aboustgethandle();
    }, []);

    const Aboutsupdatehandle = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("Title", abouts.Title);
            formData.append("Content", abouts.Content);
            const response = await axios.post("/users/privacyupdated", formData);
            if (response.data) {
                toast.success("privacy policy update Successfully ");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleCKEditorChange = (event, editor) => {
        const Content = editor.getData();
        setAbouts((prevState) => ({ ...prevState, Content: Content }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAbouts((prevAbouts) => ({
            ...prevAbouts,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="app-content content ">
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                        <div className="content-header-left col-md-9 col-12 mb-2">
                            <div className="row breadcrumbs-top">
                                <div className="col-12">
                                    {/* <h2 className="content-header-title float-start mb-0">
                                        Abouts Edit
                                    </h2> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        {/* {/ Blog Edit /} */}
                        <div className="blog-edit-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-start">
                                                <div className="author-info">
                                                    <h6 className="mb-25">Chad Alexander</h6>
                                                    <p className="card-text">May 24, 2020</p>
                                                </div>
                                            </div>
                                            {/* {/ Form /} */}
                                            <form onSubmit={Aboutsupdatehandle} className="mt-2">
                                                <div className="row">
                                                    <div
                                                        className="col-md-6 col-12"
                                                        style={{ width: "100%" }}
                                                    >
                                                        <div className="mb-2">
                                                            <label
                                                                className="form-label"
                                                                htmlFor="blog-edit-title"
                                                            >
                                                                Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="Title"
                                                                value={abouts?.Title}
                                                                id="blog-edit-title"
                                                                onChange={handleChange}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-2">
                                                            <label className="form-label">Content</label>
                                                            <div id="blog-editor-wrapper">
                                                                <div id="blog-editor-container">
                                                                    <div className="editor">
                                                                        <CKEditor
                                                                            editor={ClassicEditor}
                                                                            name="Content"
                                                                            data={abouts.Content}
                                                                            onChange={handleCKEditorChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-2"></div>
                                                    <div className="col-12 mt-50">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary me-1"
                                                        >
                                                            Save Changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            {/*/ Form */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    );
}

export default PrivacyPolicy;
