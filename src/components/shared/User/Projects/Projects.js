import axios from 'axios'
import React, { useEffect, useState } from 'react'

import menuIcon from '../../../../assets/svg/burger_list_menu.svg'

import './Project.css'

const Projects = (props) => {

    const [projects, setProjects] = useState([])

    let userId = props.userId
    let host = "http://192.168.0.41:81"
    let url = `${host}/Test/api.php?id=${userId}&require=project`
    
    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res)
            setProjects(res.data)
        }).catch(err => {
            console.log(err)
        })
    })
    

    return (
        <div className='row col-5'>
            <img src={menuIcon} alt="not-available" className='col-1' />
            <a class="dropdown-toggle text-black h2 nav-link col-4" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
            </a>
            <ul class="dropdown-menu col-2" aria-labelledby="navbarDarkDropdownMenuLink">
                {projects.map(project => <li><a class="dropdown-item h4" href="/">{project.title}</a></li>)}
            </ul>
        </div>
    )
}

export default Projects