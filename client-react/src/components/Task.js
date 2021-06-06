import React from "react";
import axios from "axios";
import '../task.min.css'
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.taskName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    let url = "http://localhost:8080/tasks";
 
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  addTask = () => {  
    let url = "http://localhost:3001/tasks";
    axios.post(url, { name: this.taskName.current.value }).then(response => {
      this.getData();
      this.taskName.current.value = "";
    });
  };
  updateTask = () => {
    let url = "http://localhost:3001/tasks";
    axios.post(url, { name: this.taskName.current.value }).then(response => {
      this.getData();
      this.taskName.current.value = "";
    });
  };
  deleteTask = () => {
    let url = "http://localhost:3001/tasks";
    axios.delete(url, { name: this.taskName.current.value }).then(response => {
      this.getData();
      this.taskName.current.value = "";
    });
  };


  render() {
    return (
      <div>
        <h1>Task List:</h1>
        <input ref={this.taskName} />
        <button type="button" className="btn btn-primary" onClick={this.addTask}>add</button>
        <ul>
          {this.state.tasks.map(p => (
            <li key={p.taskid}>
              {p.name} : { p.complete ? "complete" : "not complete" } <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
