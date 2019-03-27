import React, { Component } from "react";
import { Table, Button, Form, Icon } from "semantic-ui-react";

import Controls from './Controls'
class TasksTable extends Component {
  state = {
    taskName: () => `NewTask ${this.state.tasks.length + 1}`,
    subtasksQuantity: 1,
    tasks: [
      { name: "Task1", subtasksNumber: 4, subtasksDone: 2, isDone: false }
    ]
  };
  
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  addNewTask = event => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: event.target.taskName.value,
          subtasksNumber: event.target.subtasksQuantity.value,
          subtasksDone: 0,
          isDone: false
        }
      ]
    }, () => {this.setState({taskName: () => `NewTask ${this.state.tasks.length + 1}`});
  this.setState({subtasksQuantity: 1})});
  };

  deleteTask = (index) => {
    this.setState({tasks: this.state.tasks.filter((_,i) => i !== index)})
  };


  render() {
    const { tasks } = this.state;
    
    return (
      <Table celled compact definition textAlign="center">
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Task name</Table.HeaderCell>
            <Table.HeaderCell>Status (done/planned)</Table.HeaderCell>
            <Table.HeaderCell>Controls</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map((task, i) => (
            <Table.Row key={i}>
              <Table.Cell>{task.name}</Table.Cell>
              <Table.Cell>
                {task.subtasksDone + " / " + task.subtasksNumber}
              </Table.Cell>
              <Table.Cell><Controls deleteTask ={() => this.deleteTask(i)}/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan={3}>
              <Form onSubmit={this.addNewTask}>
                <Form.Group inline>
                  <Form.Field
                    label="Task name"
                    placeholder={"NewTask"}
                    control="input"
                    type="text"
                    value={typeof this.state.taskName === 'string'? this.state.taskName : this.state.taskName()}
                    name="taskName"
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Field
                    label="Subtasks quantity"
                    placeholder={1}
                    control="input"
                    type="number"
                    max={5}
                    min={1}
                    name="subtasksQuantity"
                    value={this.state.subtasksQuantity}
                    onChange={this.handleChange}
                    required
                  />

                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    primary
                    size="small"
                    type="submit"
                  >
                    <Icon name="add" /> Add Task
                  </Button>
                </Form.Group>
              </Form>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default TasksTable;
