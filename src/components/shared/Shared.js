import React from 'react'
import AppHeader from './AppHeader/AppHeader'
import Header from './Header/Header'
import Row from './Row'
import Info from './User/Info/Info'
import Projects from './User/Projects/Projects'

const Shared = (props) => {
    let header = ["Main Task", "Status", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Work History"]
    return (
        <>
            <AppHeader header="Client Access" />
            <Row>
                <Projects />
                <Info />
            </Row>
            <Header header={{ section: header }} />
        </>
    )
}

export default Shared