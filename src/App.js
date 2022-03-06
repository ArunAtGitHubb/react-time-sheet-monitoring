import Shared from './components/shared/Shared';
import './App.css';
import Task from './components/Task/Task';

function App() {

  let header = ["Status", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Work History"]

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
  return (
    <div className="container-fluid">
      <Shared />
      {taskData.map(data => <Task data={data} isMain />)}
    </div>
  );
}

export default App;
