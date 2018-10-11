import * as React from 'react';
import styled from 'styled-components/native';

import { screenHeight, screenWidth } from 'utils/screen';
import { ImageSourcePropType } from 'react-native';

const Component = styled.ImageBackground`
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  position: absolute;
  bottom: 0;
`;

interface Props {
  source: ImageSourcePropType;
}

export default ({ source }: Props): JSX.Element => (
  <Component
    source={source}
    resizeMode="stretch"
  />
);