import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1;  
  text-align: center;
`;

export const DetailsText = styled.span`
  font-size: 14px;
  font-weight: ${props => props.isLabel ? 'bold' : 'normal'};
  margin-right: 5px;
`;
