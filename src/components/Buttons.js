import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  box-sizing: border-box;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #273434;
  background-color: #4caf50;
  background-image: none;
  cursor: pointer;
  padding: 10px 15px;
  margin: 0 15px;
  min-height: 44px;
  max-height: 44px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  color: #ffffff;
  font-size: 1em;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const ButtonLink = Button.withComponent(Link);
