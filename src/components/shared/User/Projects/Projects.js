import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

import menuIcon from '../../../../assets/svg/burger_list_menu.svg'
import { AppContext } from '../../../../context'

import './Project.css'

const Projects = (props) => {

    const [projects, setProjects] = useState([])
    const [dropDownText, setDropDownText] = useState("Project")

    const { userId, onProjectChange } = useContext(AppContext)
    let host = process.env.REACT_APP_HOST
    let url = `${host}/api.php?id=${userId}&require=project`

    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res.data)
            setProjects(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [userId])

    const onDropDownClick = (text) => {
        setDropDownText(text)
    }

    return (
        <div className='row col-5'>
            <img src={menuIcon} alt="not-available" className='col-1' />
            <a class="dropdown-toggle text-black h2 nav-link col-4" href="/" role="button" data-bs-toggle="dropdown">
                {dropDownText}
            </a>
            <ul class="dropdown-menu col-2" aria-labelledby="navbarDarkDropdownMenuLink">
                {projects.map(project => <li key={project.projId}
                    onClick={() => onDropDownClick(project.title)}>
                    <button class="dropdown-item h4" onClick={() => onProjectChange(project.projId)}>
                        {project.title}
                    </button>
                </li>)}
            </ul>
        </div>
    )
}

export default Projects