import React from 'react'

const Header = (props) => {
    let header = props.header.section
    let flex = props.flex ? 'around' : 'between'
    let style = {
        position: "relative",
        left: "70px",
        cursor: "pointer"
    }

    const onClick = () => {
        props.onViewChange('status')
    }

    return (
        <div className='row mt-4 bg-success p-2 m-1 align-items-center'>
            <ul
                className={'d-flex list-unstyled h5 text-white justify-content-' + flex}>
                {!props.isArray ? header.map((title, idx) => <li onClick={onClick} style={title === 'Status' ? style : null}>{title}</li>) : props.text}
            </ul>
        </div>
    )
}

export default Header