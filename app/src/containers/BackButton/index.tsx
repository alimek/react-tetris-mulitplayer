import * as React from 'react';

import { Container, Image } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { back } from 'actions/nav';
import { movePrev } from 'utils/swiper';

const arrow = require('../../assets/arrow1.png');

interface ParentProps {

}

interface DispatchProps {
  actions: {
    back: () => void;
  };
}

type Props = ParentProps & DispatchProps;

class BackButton extends React.Component<Props> {
  render() {
    return (
      <Container onPress={movePrev}>
        <Image source={arrow} />
      </Container>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators({ back }, dispatch),
  }),
)(BackButton);
