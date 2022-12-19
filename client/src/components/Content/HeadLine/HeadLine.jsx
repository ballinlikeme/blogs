import Flex from "../../styles/Flex";
import Counter from "./Counter";
import Title from "./Title";
import categories from "../../../store/categories";
import { observer } from "mobx-react-lite";

const HeadLine = observer(({amount, title}) => {

    const titleToDisplay = title ? title : categories.currentCategory.name

    const normalizeVisualization = () => {
        return amount === 1 ? `${amount} Article` : `${amount} Articles`
    }

    return (
        <Flex justify={"space-between"}>
            <Title>{titleToDisplay}</Title>
            <Counter>{normalizeVisualization()}</Counter>
        </Flex>
    )
})

export default HeadLine;