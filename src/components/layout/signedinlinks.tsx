import React from "react";
import { Link, NavLink } from "react-router-dom";

interface SignedInLinksProps {}

const SignedInLinks = (props: SignedInLinksProps) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          MK
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
