import React from "react";


            
function Categorydata(props) {

  return (
    <>
      <h3 className="Catgeogry-1">Catgeogry Name</h3>

      <ul className="Catgeogry ">
        
        {props.categoryFilter.map((category, i) => (
          <li onClick={props.categoryClick(category.categoryname)}>
            <input type="checkbox" /> {/* Added checkbox here */}
            {category.categoryname} ({category.count})
          </li>
         
        ))}
      </ul>
     
    </>
  );
}

export default Categorydata;
