import React from "react";


const HeadingAndSearchfield = ({ searchChange }) => {
  return (
    <div className="pa2" id="heading-and-searchfield">
      <h1>RoboFriends</h1>

      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 b--green ba bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  )
}


export default HeadingAndSearchfield;
