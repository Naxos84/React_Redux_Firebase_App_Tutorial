import React from "react";
import { Link, NavLink } from "react-router-dom";

interface SignedOutLinksProps {}

const SignedOutLinks = (props: SignedOutLinksProps) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
