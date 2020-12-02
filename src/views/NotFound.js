import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo_back.jpg";

const styles = {
  // container: { margin: "0 auto" },
  status: { fontSize: 96, marginBottom: 20 },
};

const NotFound = () => (
  <div style={styles.container}>
    <h1 styl={styles.status}>404</h1>
    <img src={image} alt="logo" width="300" />
    <p>
      Not Found! Please click this <Link to="/">link</Link>
    </p>
  </div>
);
export default NotFound;
