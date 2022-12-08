import Flex from "../../styles/Flex";
import Counter from "./Counter";
import Title from "./Title";
import categories from "../../../store/categories";

const HeadLine = ({amount}) => {

    const normalizeVisualization = () => {
        return amount === 1 ? `${amount} Article` : `${amount} Articles`
    }

    return (
        <Flex justify={"space-between"}>
            <Title>{categories.currentCategory.name}</Title>
            <Counter>{normalizeVisualization()}</Counter>
        </Flex>
    )
}

export default HeadLine;