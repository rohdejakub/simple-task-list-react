import React from "react";
import { Icon, Header } from "semantic-ui-react";

const HeaderWithIcon = () => (
  <Header as="h1" icon>
    <Icon name="tasks" />
    Tasks List
    <Header.Subheader>With Subtasks</Header.Subheader>
  </Header>
);

export default HeaderWithIcon;
