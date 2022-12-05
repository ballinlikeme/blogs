import React from "react";
import Flex from "../../styles/Flex";
import Counter from "./Counter";
import Title from "./Title";

const HeadLine = () => {
    return (
        <Flex justify={"space-between"}>
            <Title>Latest Publications</Title>
            <Counter>50 Articles</Counter>
        </Flex>
    )
}

export default HeadLine;