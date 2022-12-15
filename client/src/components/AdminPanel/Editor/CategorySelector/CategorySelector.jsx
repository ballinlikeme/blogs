import categories from "../../../../store/categories"
import { observer } from "mobx-react-lite"
import Select from "./Select";
import Option from "./Option";

const CategorySelector = observer(({cb}) => {
    return (
        <Select>
            <Option>--- Select a category ---</Option>
            {categories.categories.map(category => (
                <Option cb={cb} id={category.id} value={category.value}>{category.name}</Option>
            ))}
        </Select>
    )
})

export default CategorySelector;