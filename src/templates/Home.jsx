import React from "react";
// import { getUserId } from "../reducks/users/selectors";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";

const Home = () => {
  // const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  // const uid = getUserId(selector);
  const toSignup = () => {
    dispatch(push("/Signup"));
  };
  return (
    <div>
      <h2>Home</h2>
      {/* <p>{uid}</p> */}
      <button onClick={() => toSignup()}>会員登録</button>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
    </div>
  );
};
export default Home;
