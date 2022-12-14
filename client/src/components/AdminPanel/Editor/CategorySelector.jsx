import categories from "../../../store/categories"
import { observer } from "mobx-react-lite"

const CategorySelector = observer(({setValue}) => {
    return (
        <select onChange={e => setValue(e.target.value)}>
            {categories.categories.map(category => {
                return <option value={category.name}>{category.name}</option>
            })}
        </select>
    )
})

export default CategorySelector;