import React from 'react'

import gridIcon from '../../assets/svg/grid_icon.svg'
import listIcon from '../../assets/svg/list_icon.svg'

const ViewChanger = (props) => {

    return (
        <div style={{
            position: "relative",
            height: "60px",
            width: "125px",
            top: "80px",
            left: "50%",
            marginBottom: "150px"
        }} className="btn-group me-4" role="group">
            <input type="radio" checked={props.view === 'list'} onChange={() => props.onClick('list')}
                className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
                <div><img src={listIcon} alt="not" /></div>
            </label>

            <input type="radio" onClick={() => props.onClick('kanban')}
                className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
            <label className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                htmlFor="btnradio2">
                <div><img src={gridIcon} alt="not" /></div>
            </label>
        </div>
    )
}

export default ViewChanger