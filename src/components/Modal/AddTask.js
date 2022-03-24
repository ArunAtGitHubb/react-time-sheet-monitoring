import React from 'react'

const AddTask = (props) => {
    return (
        <>
            <button type="button" style={{
                position: "relative",
                left: "100px"
            }} className="btn btn-success w-50 text-white" data-bs-toggle="modal" data-bs-target="#addTask">
                + Add
            </button>
            <div className="modal fade" id="addTask" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-success">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <div className="form-floating mb-3 col-6">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <select className="form-select p-0" aria-label="Default select example">
                                    <option value="1">In Progress</option>
                                    <option value="2">Open</option>
                                    <option value="3">To be validate</option>
                                </select>
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <input type="date" className="form-control" />
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Duration</label>
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <select className="form-select p-0" aria-label="Default select example">
                                    <option value="1">In Progress</option>
                                    <option value="2">Open</option>
                                    <option value="3">To be validate</option>
                                </select>
                            </div>
                            <h5>Sub Task</h5>
                            <div className="form-floating mb-3 col-6">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <select className="form-select p-0" aria-label="Default select example">
                                    <option value="1">In Progress</option>
                                    <option value="2">Open</option>
                                    <option value="3">To be validate</option>
                                </select>
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <input type="date" className="form-control" />
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Duration</label>
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <select className="form-select p-0">
                                    <option value="1">In Progress</option>
                                    <option value="2">Open</option>
                                    <option value="3">To be validate</option>
                                </select>
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Save</button>
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTask