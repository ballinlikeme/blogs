import React from "react"
import Container from "../Container";
import StyledRow from "./styled/StyledRow";
import StyledMain from "./styled/StyledMain";
import StyledCounter from "./styled/StyledCounter";

const PageHeadingEl = () => {
    return (
        <StyledMain>
            <Container>
                <StyledRow>
                    <h1>Latest Publications</h1>
                    <StyledCounter>50 Articles</StyledCounter>
                </StyledRow>
            </Container>
        </StyledMain>
    )
}

export default PageHeadingEl;