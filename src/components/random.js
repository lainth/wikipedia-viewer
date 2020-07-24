import React from 'react';
import styled from 'styled-components';

const RandomArticle = styled.div `
  color: white;
  font-size: 1em;
  text-align: center;
  display: block;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: white;
    text-decoration: none;
  }
  
`;

export default class RandomWiki extends React.Component {
    render() {
        return (
            <RandomArticle as="a" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Click here for a random article</RandomArticle>
        );
    }
}