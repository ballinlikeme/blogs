import styled from "styled-components";

const StyledPreviewText = styled.p`
  font-size: var(--secondary-heading-size);
  font-weight: var(--semibold-font);
  line-height: 200%;
`;

const PreviewText = ({text}) => {
    return <StyledPreviewText dangerouslySetInnerHTML={{__html: text}} />
}

export default PreviewText
