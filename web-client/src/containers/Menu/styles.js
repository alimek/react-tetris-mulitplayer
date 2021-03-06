import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 10px;
`;

export const Details = styled.div`
  padding-bottom: 10px;
  flex-direction: row;
`;

export const DetailsText = styled.span`
  font-size: 18px;
  font-weight: ${props => props.isLabel ? 'bold' : 'normal'};
  margin-right: 5px;
`;
