import React from 'react'
import AppHeader from './AppHeader/AppHeader'
import Header from './Header/Header'
import Row from './Row'
import Info from './User/Info/Info'
import Projects from './User/Projects/Projects'

const Shared = (props) => {
    let ListViewHeader = ["Main Task", "Status", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Work History"]

    let KanbanViewHeader = ["Open", "In Progress", "To be Validate"]

    let header = props.view === "list" ? ListViewHeader : KanbanViewHeader

    const onClick = (viewType) => {
        props.onViewChange(viewType)
    }

    return (
        <>
            <AppHeader header="Client Access" />
            <Row>
                <Projects />
                <Info onViewChange={onClick} logoutHandler={props.logoutHandler} />
            </Row>
            <Header header={{ section: header }} flex={props.view !== "list"} />
        </>
    )
}

export default Shared