import { useState } from 'react';
import axios from 'axios';
import Shared from './components/shared/Shared';
import ListView from './components/Views/ListView/ListView';
import KanbanView from './components/Views/KanbanView/KanbanView';
import ViewChanger from './components/ViewChanger/ViewChanger';
import Login from './components/Login/Login';

function App() {
  let taskData = [{
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
      msg: "Completed",
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

  const [view, setView] = useState('list')
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))

  const onViewChange = (viewType) => {
    setView(viewType)
  }

  const loginHandler = (data) => {
    let url = "http://192.168.0.46:81/Test/api.php"

    axios.get(url, {
      params: { ...data, require: "login" }
    }).then(res => {
      console.log(res)
      if (res.data.auth) {
        localStorage.setItem("auth", true)
        setAuth(true)
        return true
      }
      return false
    }).catch(err => {
      console.log(err)
    })
  }

  const logoutHandler = () => {
    console.log("clicked")
    localStorage.setItem("auth", false)
    setAuth(false)
  }

  const renderView = () => {
    switch (view) {
      case 'list':
        return <ListView taskData={taskData} view="list" />;
      case 'kanban':
        return <KanbanView view="list" />
      default:
        break;
    }
  }

  const renderApp = () => {
    return (<>
      <Shared onViewChange={onViewChange} logoutHandler={logoutHandler} view={view} />
      {renderView()}
      <ViewChanger onClick={onViewChange} view={view} />
    </>)
  }

  return (
    <div className="container-fluid">
      {isAuth ? renderApp() : <Login loginHandler={loginHandler} />}
    </div>
  );
}

export default App;
