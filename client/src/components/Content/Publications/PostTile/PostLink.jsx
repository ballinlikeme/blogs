import styled from "styled-components";
import React from "react"

const PostLinkEl = styled.span`
  font-weight: var(--semibold-font);
  font-size: var(--regular-text-size);
  cursor: pointer;
`

const PostLink = () => {
    return <PostLinkEl>Read More</PostLinkEl>
}

export default PostLink;