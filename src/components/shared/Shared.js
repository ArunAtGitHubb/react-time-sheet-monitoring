import React, { useContext } from 'react'
import { AppContext } from '../../context'
import AppHeader from './AppHeader/AppHeader'
import Header from './Header/Header'
import Row from './Row'
import Info from './User/Info/Info'
import Projects from './User/Projects/Projects'

const Shared = (props) => {

    const { onViewChange } = useContext(AppContext)

    let ListViewHeader = ["Main Task", "Status", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Work History"]

    let KanbanViewHeader = ["Open", "In Progress", "To be Validate"]

    let header = props.view === "kanban" ? KanbanViewHeader : ListViewHeader

    const onClick = (viewType) => {
        onViewChange(viewType)
    }

    return (
        <>
            <AppHeader header="Client Access" />
            <Row>
                <Projects />
                <Info />
            </Row>
            <Header
                onViewChange={onClick}
                header={{ section: header }}
                flex={props.view === "kanban"} />
        </>
    )
}

export default Shared