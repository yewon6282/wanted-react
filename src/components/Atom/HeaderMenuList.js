import React from "react";
import { Link } from "react-router-dom";

const HeaderMenuList = (props) => {
  return (
    <Link to={props.link} className={props.className} id={props.id}>
      {props.menuName}
    </Link>
  );
};

export default HeaderMenuList;
