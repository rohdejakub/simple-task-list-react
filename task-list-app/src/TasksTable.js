import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class TasksTable extends Component {
  render() {
    return (
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Task name</Table.HeaderCell>
            <Table.HeaderCell>Status (done/planned)</Table.HeaderCell>
            <Table.HeaderCell>Controls</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    );
  }
}

export default TasksTable;
