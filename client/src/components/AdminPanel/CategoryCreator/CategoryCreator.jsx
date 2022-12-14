import styled, {css} from "styled-components";
import SubmitButton from "../Editor/SubmitButton";
import categoryService from "../../../services/categoryService";
import {useState} from "react";
import Flex from "../../styles/Flex";

const StyledTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
`

const StyledInput = styled.input`
  width: 250px;
  color: var(--color-text);
  background: transparent;
  border: 1px solid var(--color-text);
  padding: 5px 10px;
  border-radius: 10px;
  &::placeholder {
    color: var(--color-text);
  }
  ${props => props.error && css`
    border-color: var(--help-color);
  `}
`

const CategoryCreator = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
        setError(false);
    }

    const create = async () => {
        try {
            await categoryService.createCategory(name);
            setName('');
        } catch (e) {
            setError(true)
        }
    }

    return (
        <>
            <StyledTitle>Create Category</StyledTitle>
            <Flex gap="5px">
                <StyledInput error={error} value={name} onChange={handleChange} placeholder="Name" />
                <SubmitButton cb={create}>Create</SubmitButton>
            </Flex>
        </>
    )
}

export default CategoryCreator;