import * as React from 'react';

import {
  Container,
  FooterLinkContainer,
  FooterLinkText,
  MenuContainer,
  Logo,
  FooterButton,
} from './styles';
import { MenuItem } from 'components';
import { NavigationScreenProp } from 'react-navigation';

interface IHomePropTypes {
  navigation: NavigationScreenProp<any, any>;
}

const logo = require('../../assets/logo-game.png');

class Home extends React.Component<IHomePropTypes> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Logo source={logo} />
        <MenuContainer>
          <MenuItem text="Single" />
          <MenuItem text="Multiplayer" />
        </MenuContainer>
        <FooterLinkContainer>
          <FooterButton onPress={() => navigation.navigate('About')}>
            <FooterLinkText>About</FooterLinkText>
          </FooterButton>
        </FooterLinkContainer>
      </Container>
    );
  }
}

export default Home;
