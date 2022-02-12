import React, { useState } from "react";
import styles from "./styles.module.css";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";


const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Welcome To My Wesbite!</h1>
            <h1>Login to Your Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              className={styles.input}

            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;