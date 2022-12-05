import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";
import HeadLine from "./HeadLine/HeadLine";
import Publications from "./Publications/Publications";

const ContentEl = styled.main`
    padding: 150px 0 30px;
    background-color: var(--background-color);
`

const Content = () => {
    return (
        <ContentEl>
            <Container>
                <HeadLine />
                <Publications />
            </Container>
        </ContentEl>
    )
}

export default Content;