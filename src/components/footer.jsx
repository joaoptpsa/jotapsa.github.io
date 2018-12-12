import * as React from 'react';
import {
  Segment, Icon, List, Header,
} from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted textAlign="center">
    <Header inverted as="h4">
      Contacts
    </Header>
    <List link inverted>
      <List.Item as="a" href="https://github.com/jotapsa">
        <Icon link name="github" />
        Github
      </List.Item>
    </List>
  </Segment>
);

export default Footer;
