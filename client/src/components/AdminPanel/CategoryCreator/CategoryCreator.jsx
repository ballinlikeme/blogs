import styled from "styled-components";
import SubmitButton from "../Editor/SubmitButton";
import categoryService from "../../../services/categoryService";
import {useState} from "react";

const StyledInput = styled.input`
  width: 250px;
  color: var(--color-text);
  background: transparent;
  border: 1px solid var(--color-text);
  padding: 5px 10px;
  &::placeholder {
    color: var(--color-text);
  }
`

const CategoryCreator = () => {
    const [name, setName] = useState('');

    const create = async () => {
        const category = await categoryService.createCategory(name);
        setName('');
    }

    return (
        <>
            <h2>Create Category</h2>
            <StyledInput value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <SubmitButton cb={create}>Create</SubmitButton>
        </>
    )
}

export default CategoryCreator;