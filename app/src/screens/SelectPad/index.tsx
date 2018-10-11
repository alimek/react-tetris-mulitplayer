import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, PadBackground, PadsContainer } from './styles';
import { FourthBackground, PadOne, PadThree, PadTwo } from 'components';
import { BackButton } from 'containers';
import { changePlayerPad } from 'actions/player';
import { PlayerPad } from 'reducers/player';

interface ParentProps {}
interface DispatchProps {
  actions: {
    changePlayerPad: (pad: string) => void;
  };
}
type Props = ParentProps & DispatchProps;

const pads = [
  {
    name: PlayerPad.ONE,
    component: PadOne,
  },
  {
    name: PlayerPad.TWO,
    component: PadTwo,
  },
  {
    name: PlayerPad.THREE,
    component: PadThree,
  },
];

class SelectPad extends React.Component<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    title: 'SELECT PAD',
    headerTitleStyle: {
      fontFamily: 'Peepo',
      fontSize: 25,
    },
    headerTintColor: '#fff',
    headerLeft: <BackButton />,
  };

  render() {
    const { actions } = this.props;

    return (
      <Container>
        <FourthBackground />
        <PadsContainer>
          {pads.map((pad, index) => (
            <PadBackground
              key={index}
              activeOpacity={0.9}
              onPress={() => actions.changePlayerPad(pad.name)}
            >
              <pad.component />
            </PadBackground>
          ))}
        </PadsContainer>
      </Container>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators({ changePlayerPad }, dispatch),
  }),
)(SelectPad);
