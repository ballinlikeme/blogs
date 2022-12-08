import React, {useState, useEffect} from "react";
import Flex from "../../styles/Flex";
import Counter from "./Counter";
import Title from "./Title";
import {observer} from "mobx-react-lite";
import categories from "../../../store/categories";
import {$host} from "../../../http/http";

const HeadLine = observer(() => {

    const [amount, setAmount] = useState(0);

    const normalizeVisualization = () => {
        return amount === 1 ? `${amount} Article` : `${amount} Articles`
    }

    useEffect(() => {

        const categoryId = categories.currentCategory.id;

            $host.post('/posts/getPostsInCategory', {
                categoryId
        })
                .then(result => setAmount(result.data.length));
    })

    return (
        <Flex justify={"space-between"}>
            <Title>{categories.currentCategory.name}</Title>
            <Counter>{normalizeVisualization()}</Counter>
        </Flex>
    )
})

export default HeadLine;