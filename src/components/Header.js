import React from "react";
import './Header.css';
import Menu from "./Menu";
function Header() {
  const data = [
    {
      name: "Home"
    },
    {
      name: "pdp"
    },
    {
      name: "plp"
    },
  ];
  return (

    <div>
      <Menu menuData={data} />
    </div>
  );
}

export default Header;
