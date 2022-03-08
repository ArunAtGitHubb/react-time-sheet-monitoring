import React from 'react'

const Header = (props) => {
    let header = props.header.section
    let flex = props.flex ? 'around' : 'between'
    let style = {
        position: "relative",
        left: "70px"
    }
    return (
        <div className='row mt-4 bg-success p-2 m-1 align-items-center'>
            <ul
                className={'d-flex list-unstyled h5 text-white justify-content-' + flex}>
                {header.map((title, idx) => <li style={title === 'Status' ? style : null}>{title}</li>)}
            </ul>
        </div>
    )
}

export default Header