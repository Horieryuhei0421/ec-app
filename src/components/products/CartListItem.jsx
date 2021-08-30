import React from "react";
import {
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getUserId } from "../../reducks/users/selectors";
import { db } from "../../firebase";

const useStyles = makeStyles({
  list: {
    height: 120,
  },
  image: {
    objectFit: "cover",
    margin: 16,
    height: 96,
    width: 96,
  },
  text: {
    width: "100%",
  },
});

const CartListItem = (props) => {
  const classes = useStyles();
  const selector = useSelector((state) => state);

  const image = props.product.images[0].path;
  const price = props.product.price.toLocaleString();

  const removeProductFromCart = (id) => {
    const uid = getUserId(selector);
    return db.collection("users").doc(uid).collection("cart").doc(id).delete();
  };

  return (
    <>
      <ListItem className={classes.list}>
        <ListItemAvatar>
          <img className={classes.image} src={image} alt="商品のTOP画像" />
        </ListItemAvatar>
        <div className={classes.text}>
          <ListItemText
            primary={props.product.name}
            secondary={"サイズ：" + props.product.size}
          />
          <ListItemText primary={"¥" + price} />
        </div>
        <IconButton onClick={() => removeProductFromCart(props.product.cartId)}>
          <Delete />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default CartListItem;
