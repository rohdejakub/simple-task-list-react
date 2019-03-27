import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class Controls extends Component{
    render(){
        return (
            <div>
                <Button positive>DONE</Button>
                <Button negative onClick={this.props.deleteTask}>DELETE</Button>
            </div>
        )
    }

}

export default Controls;