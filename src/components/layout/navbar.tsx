import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedinlinks";
import SignedOutLinks from "./signedoutlinks";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Mario Plan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
