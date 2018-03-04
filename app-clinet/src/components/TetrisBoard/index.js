// @flow
import React from 'react';
import Icon from '@expo/vector-icons/FontAwesome';

import {
  Container,
  Board,
  Block,
  Button,
  ButtonContainer,
  ButtonRow,
  ButtonColumn,
  ButtonCenterContainer,
} from './styles';
import { flatten } from '../../utils/game-board';

type PropTypesType = {
  rows: Array<Array<number>>,
  moveLeft: Function,
  moveRight: Function,
  rotateLeft: Function,
  rotateRight: Function,
  fallDown: Function,
};

class TetrisBoard extends React.Component<PropTypesType> {
  render() {
    const {
      rows,
      moveLeft,
      moveRight,
      rotateLeft,
      rotateRight,
      fallDown,
    } = this.props;
    const flattened = flatten(rows);

    return (
      <Container>
        <Board>
          {
            flattened.map((isBlock, idx) => (
              <Block
                isBlock={isBlock}
                index={idx}
                key={idx}
              />
            ))
          }
        </Board>
        <ButtonContainer>
          <ButtonColumn>
            <ButtonRow>
              <ButtonCenterContainer>
                <Button
                  size={60}
                  onPress={rotateRight}
                >
                  <Icon
                    name="rotate-left"
                    style={{
                      color: 'white',
                      fontSize: 30,
                    }}
                  />
                </Button>
              </ButtonCenterContainer>
            </ButtonRow>
            <ButtonRow>
              <ButtonCenterContainer>
                <Button
                  size={60}
                  onPress={moveLeft}
                >
                  <Icon
                    name="arrow-left"
                    style={{
                      color: 'white',
                      fontSize: 30,
                    }}
                  />
                </Button>
              </ButtonCenterContainer>
              <ButtonCenterContainer>
                <Button
                  size={60}
                  onPress={moveRight}
                >
                  <Icon
                    name="arrow-right"
                    style={{
                      color: 'white',
                      fontSize: 30,
                    }}
                  />
                </Button>
              </ButtonCenterContainer>
            </ButtonRow>
            <ButtonRow>
              <ButtonCenterContainer>
                <Button
                  size={60}
                  onPress={rotateLeft}
                >
                  <Icon
                    name="rotate-right"
                    style={{
                      color: 'white',
                      fontSize: 30,
                    }}
                  />
                </Button>
              </ButtonCenterContainer>
            </ButtonRow>
          </ButtonColumn>
          <ButtonRow>
            <ButtonCenterContainer>
              <Button
                size={100}
                onPress={fallDown}
              >
                <Icon
                  name="arrow-down"
                  style={{
                    color: 'white',
                    fontSize: 30,
                  }}
                />
              </Button>
            </ButtonCenterContainer>
          </ButtonRow>
        </ButtonContainer>
      </Container>
    );
  }
}

export default TetrisBoard;
