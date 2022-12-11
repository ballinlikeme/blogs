import styled from "styled-components"
import categories from "../../../store/categories";
import {observer} from "mobx-react-lite";

const StyledCategorySelector = styled.select`
  width: 100px;
  margin-top: 20px;
`

const CategorySelector = observer(({setCategory}) => {

     return (
          <StyledCategorySelector onChange={e => setCategory(e.target.value)}>
               {categories.categories.map(category => {
                    return <option key={category.id} value={category.name}>{category.name}</option>
               })}
          </StyledCategorySelector>
     )
})

export default CategorySelector