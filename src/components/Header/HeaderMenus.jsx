import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, Menu } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { getProductsInCart } from "../../reducks/users/selectors";
import { useSelector } from "react-redux";

const HeaderMenus = (props) => {
  const selector = useSelector((state) => state);
  let productsInCart = getProductsInCart(selector);
  return (
    <>
      <IconButton>
        <Badge badgeContent={productsInCart.length} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <IconButton>
        <Favorite />
      </IconButton>
      <IconButton onClick={(event) => props.handleDrawerToggle(event)}>
        <Menu />
      </IconButton>
    </>
  );
};

export default HeaderMenus;
