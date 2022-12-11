import styled from "styled-components"
import Title from "../../SinglePostContent/Title/Title"

const StyledResultField = styled.div`
  margin-top: 60px;
`

const Preview = ({content, title}) => {
    return (
        <>
            <Title>{title}</Title>
            <StyledResultField dangerouslySetInnerHTML={{__html: content}}></StyledResultField>
        </>
    )
}

export default Preview;