import React from "react";

const Menu = (props) => {
  
  return (
    <ul className="menu">
      {props.menuData.map((menu, i) => (
        <ol className="menu-1" key={i}>
          <div>{menu.name}</div>
        </ol>
      ))}
    </ul>
  );
};

export default Menu;
