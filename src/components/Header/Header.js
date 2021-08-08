import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="links">
        <Link to="/" exact>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/help">Help</Link>
      </div>
      <div className="logo">
        <h2>Bookup</h2>
      </div>
      <div className="login">
        <Link to="/sign-in">Sign-in</Link>
        <Link to="/log-in">Log-in</Link>
      </div>
    </div>
  );
};

export default Header;
