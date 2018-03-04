import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  position: relative;
  display: flex;
`;

export const OverContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
`;
