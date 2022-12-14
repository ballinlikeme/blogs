import ButtonsWrapper from "./ButtonsWrapper"
import Flex from "../../styles/Flex"
import TypeButton from "./TypeButton"

const Controls = ({cb}) => {
    return (
        <ButtonsWrapper>
            <Flex>
                <TypeButton setValue={cb} left>Editor</TypeButton>
                <TypeButton setValue={cb}>Preview</TypeButton>
            </Flex>
        </ButtonsWrapper>
    )
}

export default Controls;