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

const PostTile = () => {
    return (
        <PostTileEl>
            <Flex direction={"column"} gap={"14px"}>
                <h2>Post Title</h2>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores consequuntur distinctio, labore neque nesciunt obcaecati optio sunt veritatis voluptatibus?
                </Description>
                <PostLink />
            </Flex>
        </PostTileEl>
    )
}

export default PostTile;