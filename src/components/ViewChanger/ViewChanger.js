import React from 'react'

import gridIcon from '../../assets/svg/grid_icon.svg'
import listIcon from '../../assets/svg/list_icon.svg'

const ViewChanger = (props) => {
    return (
        <div style={{
            position: "relative",
            height: "60px",
            width: "375px",
            top: "150px",
            left: "40%"
        }} className="btn-group me-4" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" onClick={() => props.onClick('list')} className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
            <label className="btn btn-outline-primary" for="btnradio1">
                <div><img src={listIcon} alt="not" /> List View</div>
            </label>

            <input type="radio" onClick={() => props.onClick('kanban')} className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
            <label className="btn btn-outline-primary d-flex align-items-center" for="btnradio2">
                <div><img src={gridIcon} alt="not" /> Kanban</div>
            </label>
        </div>
    )
}

export default ViewChanger