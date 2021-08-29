import { React, useCallback, useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { FavoriteBorder } from "@material-ui/icons";

const useStyles = makeStyles({
  iconCell: {
    padding: 0,
    height: 48,
    width: 48,
  },
});

const SizeTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          {props.sizes.length > 0 &&
            props.sizes.map((item, index) => (
              <TableRow key={item.size}>
                <TableCell component="th" scope="row">
                  {item.size}
                </TableCell>
                <TableCell>残り{item.quantity}点</TableCell>
                <TableCell className={classes.iconCell}>
                  {item.quantity > 0 ? (
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => props.addProduct(item.size)}
                    >
                      <ShoppingCart />
                    </IconButton>
                  ) : (
                    <div>売切</div>
                  )}
                </TableCell>
                <TableCell className={classes.iconCell}>
                  <IconButton className={classes.iconCell}>
                    <FavoriteBorder />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SizeTable;
