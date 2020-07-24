import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const InputDiv = styled.div `
    text-align: center;
    margin-top: 1em;
`

const StyledParagraph = styled.p `
    color: white;
    text-align: center;
    margin-top: 1em;
`

const StyledIcon = styled.span `
    color: orange;
    font-size: 3em;
    cursor: pointer;
`;

const StyledInput = styled.input`
    margin: auto;
    border: 3px solid orange;
    background-color: transparent;
    border-radius: 25px;
`;

export default class SearchArticle extends React.Component {
    render() {
        return (
            <InputDiv>
                <StyledIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </StyledIcon>
                {/*<StyledInput />*/}
                <StyledParagraph>Click icon to search</StyledParagraph>
            </InputDiv>
        );
    }
}