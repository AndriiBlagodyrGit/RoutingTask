import styled from 'styled-components';

export const Text = styled.p`
  text-align: ${props => props.align || 'left'};

  b {
    color: inherit;
  }
  a,
  a:visited {
    color: inherit;
  }

  u {
    cursor: pointer;
  }
`;

export const HeaderText = styled.h1`
  text-align: ${props => props.align || 'left'};
  color: #819194;
`;

export const TitleText = Text.extend`
  color: #0098cb;
  font-size: 1.2em;
  margin: 0;
`;

export const BodyText = Text.extend`
  color: #273434;
  font-size: 1em;
`;

export const DocumentTitleText = styled.span`
  color: #273434;
  font-size: 1em;
  font-weight: bold;
`;

export const DocumentBodyText = styled.span`
  color: #273434;
  font-size: 1em;
`;
