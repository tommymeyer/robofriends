import React from "react";
import Card from "../Card/Card.js";


const CardList = ({ robots }) => {
  const cardComponentArray = robots.map((robot) => {
    return (
      <Card
        name={robot.name}
        email={robot.email}
        username={robots.username}
        id={robot.id}
        key={robot.id}
      />
    );
  });

  return (
    <>
      {cardComponentArray}
    </>
  )
}


export default CardList;
