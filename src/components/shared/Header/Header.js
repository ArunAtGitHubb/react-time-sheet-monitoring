import React from 'react'

const Header = (props) => {
    let header = props.header.section
    return (
        <div className='row mt-4 bg-success p-2 m-1 align-items-center'>
            <ul className='d-flex justify-content-around list-unstyled h5 text-white'>
                {header.map(title => <li>{title}</li>)}
            </ul>
        </div>
    )
}

export default Header