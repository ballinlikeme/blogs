import React, {useEffect, useState} from "react";
import MenuLink from "./MenuLink";
import Flex from "../../styles/Flex";
import { observer } from "mobx-react-lite";
import categories from "../../../store/categories";
import { Link } from "react-router-dom";
import categoryService from "../../../services/categoryService";
import postService from "../../../services/postService";

const Menu = observer(() => {
  const currentCategory = categories.currentCategory.name;
  const [categoriesInMenu, setCategoriesInMenu] = useState([]);

  useEffect(() => {
    categoryService.getAllCategories().then(res => {
      const cats = [];
      categories.setCategories(res);
      res.forEach(async category => {
        const { data } = await postService.getPostsInCategory(category.id);
        if (data.length > 0) cats.push(category);
        setCategoriesInMenu(cats);
      })
    })
  }, []);

  const changeCategory = (event, name, id) => {
    event.preventDefault();
    categories.setCurrentCategory({ name, id });
  };

  return (
    <Flex align={"center"} gap={"20px"}>
      {categoriesInMenu.map((category) => {
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
