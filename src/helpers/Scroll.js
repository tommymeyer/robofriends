import React from "react";


const Scroll = (props) =>{
  return (
    <div style={{ overflowY: "scroll", borderTop: "1px solid #cdecff", height: "81vh", padding: "1rem" }}>
      {props.children}
    </div>
  );
};


export default Scroll;
