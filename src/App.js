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
import Spinner from './components/Spinner/Spinner';

function App(props) {

  const [view, setView] = useState()
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  const [project, setProject] = useState(false)
  const [projects, setProjects] = useState([])
  const [isLoad, setLoad] = useState(false)

  const onViewChange = (viewType) => {
    setView(viewType)
  }

  const loadProjects = (id) => {
    let url = process.env.REACT_APP_HOST + `/api.php?require=request&projectId=${id}`
    axios.get(url).then(res => {
      setProjects(res.data)
      setLoad(false)
    }).catch(err => {
      setLoad(true)
      console.log(err)
    })
  }

  const onProjectChange = (id) => {
    setLoad(true)
    props.onProjectChange(id)
    loadProjects(id)
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
        return <KanbanView taskData={projects} />
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
        {isLoad && <Spinner />}
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
    onUserLogin: (id) => dispatch(actions.setUserId(id)),
    onProjectChange: (id) => dispatch(actions.setProjectId(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
