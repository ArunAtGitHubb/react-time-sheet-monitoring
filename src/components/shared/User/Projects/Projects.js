import React from 'react'

import menuIcon from '../../../../assets/svg/burger_list_menu.svg'

import './Project.css'

const Projects = (props) => {
    return (
        <div className='row col-5'>
            <img src={menuIcon} alt="not-available" className='col-1' />
            <a class="dropdown-toggle text-black h2 nav-link col-4" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tigeen Timesheet
            </a>
            <ul class="dropdown-menu col-2" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item h4" href="/">Project #1</a></li>
                <li><a class="dropdown-item h4" href="/">Project #2</a></li>
                <li><a class="dropdown-item h4" href="/">Project #3</a></li>
            </ul>
        </div>

    )
}

export default Projects