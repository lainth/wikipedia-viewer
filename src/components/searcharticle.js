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
    display: none;
    margin: auto;
    border: 4px solid orange;
    background-color: transparent;
    border-radius: 25px;
    color: white;
    padding: 3px 1em;

    &:focus {
        outline: 5px white;
    } 
`;

export default class SearchArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayIcon: "inline",
            displayInput: "none"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            displayIcon: "none",
            displayInput: "block"
        })
    }

    render() {
        return (
            <InputDiv>
                <StyledIcon>
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        onClick={this.handleClick}
                        style={{display: this.state.displayIcon}} />
                </StyledIcon>
                <StyledInput type="text" style={{display: this.state.displayInput}} />
                <StyledParagraph>Click icon to search</StyledParagraph>
            </InputDiv>
        );
    }
}