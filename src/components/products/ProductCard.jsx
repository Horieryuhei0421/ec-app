import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import NoImage from "../../assets/img/no_image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 8,
      width: "calc(50% - 16px)",
    },
    [theme.breakpoints.up("md")]: {
      margin: 16,
      width: "calc(33.3333% - 32px)",
    },
  },
  content: {
    display: "flex",
    padding: "16 8",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: 16,
    },
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  price: {
    color: theme.palette.secondary.dark,
    fontSize: 16,
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const images = props.images.length > 0 ? props.images : [{ path: NoImage }];
  const price = props.price.toLocaleString();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={images[0].path} />
      <CardContent className={classes.content}>
        <div>
          <Typography color="textSecondary">{props.name}</Typography>
          <Typography className={classes.price}>¥{price}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
