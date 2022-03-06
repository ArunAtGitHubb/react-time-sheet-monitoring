import React from 'react'

import userIcon from "../../../../assets/png/user_icon.png"

const Info = (props) => {
    return (
        <div className='col-3 offset-4 d-flex justify-content-end'>
            <img src={userIcon}
                className="mt-3 me-3"
                style={{ width: "35px", height: "35px" }}
                alt="not-available" />
        </div>
    )
}

export default Info