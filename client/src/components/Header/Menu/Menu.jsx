import React, { useEffect } from "react";
import MenuLink from "./MenuLink";
import Flex from "../../styles/Flex";
import { observer } from "mobx-react-lite";
import categories from "../../../store/categories";
import { Link } from "react-router-dom";
import categoryService from "../../../services/categoryService";

const Menu = observer(() => {
  const currentCategory = categories.currentCategory.name;

  useEffect(() => {
    categoryService.getAllCategories().then(res => {
      const sorted = res.sort((a, b) => a.name > b.name ? 1 : -1);
      categories.setCategories(sorted);
    })
  }, []);

  const changeCategory = (event, name, id) => {
    event.preventDefault();
    categories.setCurrentCategory({ name, id });
  };

  return (
    <Flex align={"center"} gap={"20px"}>
      {categories.categories.map((category) => {
        return (
          <MenuLink
            onClick={(e) => changeCategory(e, category.name, category.id)}
            current={category.name === currentCategory}
            key={category.id}
          >
            <Link to={`/${category.name}`}>{category.name}</Link>
          </MenuLink>
        );
      })}
    </Flex>
  );
});

export default Menu;
