import React, { Component, Fragment } from "react";
import { Button } from "semantic-ui-react";

class Controls extends Component {
  render() {
    return (
      <div>
        {!this.props.isDone && (
          <Fragment>
            <Button positive onClick={this.props.makeItDone}>DONE</Button>
            <Button onClick={this.props.increaseTask}>
              Increase Task Count
            </Button>
          </Fragment>
        )}
        <Button negative onClick={this.props.deleteTask}>
          DELETE
        </Button>
      </div>
    );
  }
}

export default Controls;
