import * as React from 'react';

import { Container } from './styles';

interface IAboutPropTypes {

}

class About extends React.Component<IAboutPropTypes> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container/>
    );
  }
}

export default About;
