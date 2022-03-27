import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { AppContext } from './context';
import Shared from './components/shared/Shared';
import ListView from './components/Views/ListView/ListView';
import KanbanView from './components/Views/KanbanView/KanbanView';
import ViewChanger from './components/ViewChanger/ViewChanger';
import Login from './components/Login/Login';
import StatusView from './components/Views/StatusView/StatusView';
import * as actions from "./store/actions"

function App(props) {
  let taskData1 = [{
    id: "1",
    task: "Develop the mockup",
    status: {
      msg: "In Progress",
      color: "success"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }, {
    id: "2",
    task: "Team Meeting",
    status: {
      msg: "Open",
      color: "danger"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }, {
    id: "3",
    task: "Formation",
    status: {
      msg: "To be validate",
      color: "info"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }, {
    id: "4",
    task: "Development",
    status: {
      msg: "In Progress",
      color: "success"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }]

  let taskData2 = [{
    id: "1",
    task: "Develop the mockup 2",
    status: {
      msg: "In Progress",
      color: "success"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }, {
    id: "2",
    task: "Team Meeting 2",
    status: {
      msg: "Open",
      color: "danger"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }, {
    id: "3",
    task: "Formation 2",
    status: {
      msg: "To be validate",
      color: "info"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }, {
    id: "4",
    task: "Development 2",
    status: {
      msg: "In Progress",
      color: "success"
    },
    dueDate: "1-3-2022",
    dueStart: "1-1-2022",
    dueEnd: "1-3-2022",
    duration: "50:00:00",
    assignee: "MS,LB",
    budget: "$500",
  }]

  const [view, setView] = useState()
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  const [project, setProject] = useState(false)
  const [projects, setProjects] = useState([])

  const onViewChange = (viewType) => {
    setView(viewType)
  }

  const loadProjects = (id) => {
    let data = id === "37" ? taskData1 : taskData2
    return data
  }

  const onProjectChange = (id) => {
    setProjects(loadProjects(id))
    setProject(true)
    setView('list')
  }

  const loginHandler = async (data) => {
    let host = process.env.REACT_APP_HOST
    let url = `${host}/api.php`
    let auth = false

    let res = await axios.get(url, {
      params: { ...data, require: "login" }
    })
    console.log(res)
    auth = res.data.auth
    localStorage.setItem("auth", auth)
    localStorage.setItem("userId", res.data.id || null)
    props.onUserLogin(res.data.id)
    setAuth(auth)
    return { auth, msg: res.data.result }
  }

  const logoutHandler = () => {
    localStorage.setItem("auth", false)
    localStorage.setItem("userId", null)
    setAuth(false)
  }

  const value = {
    userId: props.userId,
    onViewChange,
    onProjectChange,
    loginHandler,
    logoutHandler,
    projects
  }

  const renderView = () => {
    switch (view) {
      case 'list':
        return <ListView taskData={projects} />;
      case 'kanban':
        return <KanbanView view="list" />
      case 'status':
        return <StatusView onViewChange={onViewChange} />
      default:
        break;
    }
  }

  const renderApp = () => {
    return (<>
      <Shared view={view} />
      {project ? renderView() : null}
      <ViewChanger onClick={onViewChange} view={view} />
    </>)
  }

  return (
    <AppContext.Provider value={value}>
      <div className="container-fluid">
        {isAuth ? renderApp() : <Login loginHandler={loginHandler} />}
      </div>
    </AppContext.Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (id) => dispatch(actions.setUserId(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
