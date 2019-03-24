import styled from 'styled-components';

export const Layout = styled.div`
  box-sizing: border-box;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-grow: 0;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 0;

  & > * {
    flex-basis: auto;
  }
`;
