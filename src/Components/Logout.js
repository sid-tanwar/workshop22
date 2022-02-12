import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { selectUser } from "../features/userSlice";
import styles from "./styles.module.css"
const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = (e) => {
    dispatch(logout());
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container}>
            <h1>User Details</h1>
            <h1>Name : <span>{user.name}</span></h1>
            <h1>Email : <span>{user.email}</span></h1>

            <button className={styles.green_btn} onClick={(e) => logout(e)}> Log out
            </button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Logout;
