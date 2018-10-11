import * as React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import packageJson from '../../../package.json';

import {
  Container,
  FooterLinkContainer,
  FooterLinkText,
  MenuContainer,
  Logo,
} from './styles';
import { MenuItem, FirstBackground } from 'components';
import { NavigationScreenProp } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { changeGameType } from 'actions/app';
import { AppType } from 'reducers/app';

interface ParentTypes {
  navigation: NavigationScreenProp<any, any>;
}

interface DispatchProps {
  actions: {
    changeGameType: (type: string) => void;
  };
}

type Props = ParentTypes & DispatchProps;

const logo = require('../../assets/logo.png');

class Home extends React.Component<Props> {
  static navigationOptions = {
    header: null,
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
  };

  render() {
    const { navigation, actions } = this.props;

    return (
      <Container>
        <FirstBackground />
        <Logo resizeMode="contain" source={logo} />
        <MenuContainer>
          <MenuItem
            text="Single"
            index={1}
            onPress={() => actions.changeGameType(AppType.SINGLE)}
          />
          <MenuItem
            text="Multiplayer"
            index={2}
            onPress={() => actions.changeGameType(AppType.MULTIPLAYER)}
          />
          <MenuItem
            text="About"
            index={3}
            onPress={() => navigation.navigate('About')}
          />
        </MenuContainer>
        <FooterLinkContainer>
          <FooterLinkText>{`Version  ${packageJson.version}`}</FooterLinkText>
        </FooterLinkContainer>
      </Container>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators({ changeGameType }, dispatch),
  }),
)(Home);
