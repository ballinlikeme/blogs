import React from "react"
import styled from "styled-components"
import Flex from "../../../styles/Flex"
import Description from "./Description";
import PostLink from "./PostLink";

const PostTileEl = styled.article`
  background-color: var(--sec-background-color);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  &:hover h2, &:hover span {
    color: var(--accent-color);
  }
`

const StyledPostTitle = styled.h2`
  transition: color .2s ease-in;
`

const PostTitle = ({children}) => {
    return <StyledPostTitle>{children}</StyledPostTitle>
}

const PostTile = ({title, description}) => {
    return (
        <PostTileEl>
            <Flex direction={"column"} gap={"14px"}>
                <PostTitle>{title}</PostTitle>
                <Description>
                    {description}
                </Description>
                <PostLink />
            </Flex>
        </PostTileEl>
    )
}

export default PostTile;