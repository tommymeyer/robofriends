import React, { useState, useEffect } from "react";
import CardList from "../CardList/CardList";
import HeadingAndSearchfield from "../HeadingAndSearchfield/HeadingAndSearchfield";
import Scroll from "../../helpers/Scroll";
import "./App.sass";


const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const [robots, setRobots] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);


  const filteredRobots = robots.filter((bot) => {
    return bot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  if (!robots.length) {
    return <h1 className="loading">Loading...</h1>
  } else {
    return (
      <div className="tc">
        <HeadingAndSearchfield searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  };
};


export default App;
