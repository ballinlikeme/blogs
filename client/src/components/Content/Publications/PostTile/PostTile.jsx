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
`

const PostTile = ({title, description}) => {
    return (
        <PostTileEl>
            <Flex direction={"column"} gap={"14px"}>
                <h2>{title}</h2>
                <Description>
                    {description}
                </Description>
                <PostLink />
            </Flex>
        </PostTileEl>
    )
}

export default PostTile;