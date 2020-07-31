import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const InputDiv = styled.div `
    text-align: center;
    margin-top: 1em;
`;

const StyledAnchor = styled.a `
    text-decoration: none !important;
`;

const ArticleDiv = styled.div `
    color: white;
    text-align: left;
    background-color: grey;
    border: 1px solid white;
    margin-bottom: 1em;
    padding: .5em 1em;
`;

const StyledParagraph = styled.p `
    color: white;
    text-align: center;
    margin-top: 1em;
`;

const StyledInput = styled.input.attrs({
    type: "text"
})`
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
            inputVal: "",
            articles: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let targetEvent = event.target.value;
        this.setState({
            inputVal: targetEvent
        })
    }

    handleSubmit = (event) => {
        let searchExp = this.state.inputVal;
        let req = 'https://en.wikipedia.org/api/rest_v1/page/summary/'+ searchExp;
        
        axios.get(req)
        .then(res => {
          const article = res.data;
         this.setState({ articles: [...this.state.articles, article] }, () => {console.log(this.state.articles)});
        })
    
        event.preventDefault();
    }

    render() {
        let article = this.state.articles;
        return (
            <React.Fragment>
                <InputDiv>
                    <form onSubmit={this.handleSubmit}>
                        <StyledInput onChange={this.handleChange} value={this.state.inputVal} />
                    </form>
                    <StyledParagraph>Type something to search</StyledParagraph>
                </InputDiv>
                {article.map((item) => 
                    <StyledAnchor href={item.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">
                        <ArticleDiv>
                            <h1>{item.title}</h1>
                            <p>{item.extract}</p>
                    </ArticleDiv>
                    </StyledAnchor>
                )} 
            </React.Fragment>   
        );
    }
}