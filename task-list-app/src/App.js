import React, { Component } from "react";
import {Grid} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

import HeaderWithIcon from './HeaderWithIcon'
import TasksTable from './TasksTable'

class App extends Component {
  render() {
    return (
      <Grid container centered>
      <Grid.Row><HeaderWithIcon/></Grid.Row>
      <Grid.Row><TasksTable/></Grid.Row>
      </Grid>
    );
  }
}

export default App;
