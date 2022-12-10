import React, { useEffect } from "react";
import MenuLink from "./MenuLink";
import Flex from "../../styles/Flex";
import { $host } from "../../../http/http";
import { observer } from "mobx-react-lite";
import categories from "../../../store/categories";
import auth from "../../../store/auth";
import { Link } from "react-router-dom";

const Menu = observer(() => {
  const currentCategory = categories.currentCategory.name;

  useEffect(() => {
    $host.get("/categories/getAll").then((result) => {
      const categoriesData = Array.from(result.data);
      const sortedCategoriesData = categoriesData.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      const currentCategoryPayload = {
        id: sortedCategoriesData[0].id,
        name: sortedCategoriesData[0].name,
      };
      categories.setCategories(sortedCategoriesData);
      categories.setCurrentCategory(currentCategoryPayload);
    });
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
            {category.name}
          </MenuLink>
        );
      })}
      {auth.getUser()?.role === "ADMIN" ? (
        <Link to="/create">
          <MenuLink>CREATE</MenuLink>
        </Link>
      ) : (
        ""
      )}
    </Flex>
  );
});

export default Menu;
