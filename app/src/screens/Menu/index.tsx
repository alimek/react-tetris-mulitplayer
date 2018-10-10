import * as React from 'react';
// @ts-ignore
import packageJson from '../../../package.json';

import {
  Container,
  FooterLinkContainer,
  FooterLinkText,
  MenuContainer,
  Logo,
} from './styles';
import { MenuItem, Background } from 'components';
import { NavigationScreenProp } from 'react-navigation';

interface IHomePropTypes {
  navigation: NavigationScreenProp<any, any>;
}

const logo = require('../../assets/logo.png');
const background = require('../../assets/bg1.png');

class Home extends React.Component<IHomePropTypes> {
  static navigationOptions = {
    header: null,
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Background
          source={background}
        />
        <Logo resizeMode="contain" source={logo} />
        <MenuContainer>
          <MenuItem text="Single" index={1} onPress={() => {}} />
          <MenuItem text="Multiplayer" index={2} onPress={() => navigation.navigate('PlayerSelect')} />
          <MenuItem text="About" index={3} onPress={() => navigation.navigate('About')} />
        </MenuContainer>
        <FooterLinkContainer>
          <FooterLinkText>{`Version  ${packageJson.version}`}</FooterLinkText>
        </FooterLinkContainer>
      </Container>
    );
  }
}

export default Home;
