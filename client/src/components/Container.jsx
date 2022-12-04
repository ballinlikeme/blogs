import styled from "styled-components";

const StyledContainer = styled.div`
max-width: 1280px;
margin: 0 auto;
${props => props.flex && `
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`}
`

const Container = (props) => {
    return <StyledContainer {...props} />
}

export default Container;