import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, Menu } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";

const HeaderMenus = () => {
  return (
    <>
      <IconButton>
        <Badge badgeContent={3} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <IconButton>
        <Favorite />
      </IconButton>
      <IconButton>
        <Menu />
      </IconButton>
    </>
  );
};

export default HeaderMenus;
