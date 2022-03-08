import React from 'react'

import userIcon from "../../../../assets/png/user_icon.png"

const Info = (props) => {
    return (
        <div className='col-3 offset-4 d-flex justify-content-end'>
            <button className='btn btn-outline-success d-flex'>
                <img src={userIcon}
                    className="mt-3 me-3"
                    style={{ width: "25px", height: "25px" }}
                    alt="not-available" />
                <h6 style={{ width: "100px" }} className='mt-3'>Log Out</h6>
            </button>
        </div>
    )
}

export default Info