import React from 'react'

const Header = (props) => {
    let header = props.header.section
    let style = {
        cursor: "pointer",
        width: "85px"
    }

    let thStyle = {
        width: "85px"
    }

    let tableStyle = {
        display: "inline-grid",
        marginBottom: "0px"
    }

    const onClick = () => {
        props.onViewChange('status')
    }

    const isStatus = (title) => title === "Status"

    return (
        <div className='row mt-4 bg-success p-2 m-1 align-items-center'>
            <table className='table' style={tableStyle}>
                <thead className='d-flex list-unstyled h5 text-white justify-content-between align-items-center'>
                    {!props.isArray ? 
                    header.map((_, idx) => 
                    <tr key={idx} style={_ === 'Status' ? style : idx === 0 ? {width: "38%"} : thStyle}>
                        <td style={{borderBottomWidth: "0px"}} onClick={isStatus(_) ? onClick : null} 
                            >
                            {_}
                        </td>
                    </tr>
                    ) : 
                    <tr><td style={thStyle}>{props.text}</td></tr>}
                </thead>
            </table>
        </div>
    )
}

export default Header