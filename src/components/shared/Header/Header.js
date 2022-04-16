import React from 'react'

const Header = (props) => {
    let header = props.header.section
    let style = {
        cursor: "pointer"
    }

    let tableStyle = {
        display: "inline-grid",
        marginBottom: "0px"
    }

    const onClick = () => {
        props.onViewChange('status')
    }

    return (
        <div className='row mt-4 bg-success p-2 m-1 align-items-center'>
            <table className='table' style={tableStyle}>
                <thead className='d-flex list-unstyled h5 text-white justify-content-between'>
                    {!props.isArray ? header.map((title, idx) => <th onClick={onClick} style={title === 'Status' ? style : null}>{title}</th>) : <th>{props.text}</th>}
                </thead>
            </table>
        </div>
    )
}

export default Header