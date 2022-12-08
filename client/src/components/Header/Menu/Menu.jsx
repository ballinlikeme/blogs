import React, {useState, useEffect} from "react";
import MenuLink from "./MenuLink";
import Flex from "../../styles/Flex";
import {$host} from "../../../http/http";
import {observer} from "mobx-react-lite";
import categories from "../../../store/categories";

const Menu = observer(() => {
    const currentCategory = categories.currentCategory.name;

    useEffect(() => {
        $host.get('/categories/getAll')
            .then(result => {
                const categoriesData = Array.from(result.data);
                const sortedCategoriesData = categoriesData.sort((a,b) => a.name > b.name ? 1 : -1);
                const currentCategoryPayload = {
                    id: sortedCategoriesData[0].id,
                    name: sortedCategoriesData[0].name
                }
                categories.setCategories(sortedCategoriesData);
                categories.setCurrentCategory(currentCategoryPayload);
            })
    }, []);

    return (
        <Flex align={"center"} gap={"20px"}>
            {categories.categories.map(category => {
                return <MenuLink
                    current={category.name === currentCategory}
                    key={category.id}>
                        {category.name}
                    </MenuLink>
            })}
        </Flex>
    )
});

export default Menu;