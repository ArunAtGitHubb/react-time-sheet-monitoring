import { useState } from 'react';
import Shared from './components/shared/Shared';
import ListView from './components/Views/ListView/ListView';
import './App.css';
import KanbanView from './components/Views/KanbanView/KanbanView';
import ViewChanger from './components/ViewChanger/ViewChanger';

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
  const onViewChange = (viewType) => {
    setView(viewType)
  }

  const renderView = () => {
    if (view === 'list') {
      return <ListView taskData={taskData} view="list" />;
    }
    if (view === 'kanban') {
      return <KanbanView view="list" />
    } else {
      return null
    }
  }

  return (
    <div className="container-fluid">
      <Shared onViewChange={onViewChange} view={view} />
      {renderView()}
      <ViewChanger onClick={onViewChange} view={view} />
    </div>
  );
}

export default App;
