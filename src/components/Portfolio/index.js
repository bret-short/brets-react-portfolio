import React from "react";
import Project from "../Project";
import iMemeit from "../../assets/images/imemeit.png";
import gamerPortal from "../../assets/images/gamer-portal.png";
import ohSnap from "../../assets/images/oh-snap.png";
import pizzaHunt from "../../assets/images/pizza-hunt.png";
import budgetTracker from "../../assets/images/budget-tracker.png";
import foodFestival from "../../assets/images/food-festival.png";
import onlyMemes from "../../assets/images/onlymemes.png";

function Portfolio(props) {
  return (
    <div className="portfolio-container">
      <Project
        name="OnlyMemes"
        githubLink="https://github.com/corycalaway/only-memes"
        deployedLink="https://onlymemes.herokuapp.com/"
        projectImage={onlyMemes}
      ></Project>
      <Project
        name="Gamer Portal"
        githubLink="https://github.com/corycalaway/gamer-portal"
        deployedLink="https://corycalaway.github.io/gamer-portal/"
        projectImage={gamerPortal}
      ></Project>
      <Project
        name="Oh Snap"
        githubLink="https://github.com/bret-short/photo-port"
        deployedLink="https://bret-short.github.io/photo-port/"
        projectImage={ohSnap}
      ></Project>
      <Project
        name="iMemeit"
        githubLink="https://github.com/paulchang15/meme-it"
        deployedLink="https://imeme-it.herokuapp.com/"
        projectImage={iMemeit}
      ></Project>
      <Project
        name="Budget Tracker"
        githubLink="https://github.com/bret-short/budget-tracker"
        deployedLink="https://budget-tracker-bret.herokuapp.com/"
        projectImage={budgetTracker}
      ></Project>
      <Project
        name="Pizza Hunt"
        githubLink="https://github.com/bret-short/pizza-hunt"
        deployedLink="https://protected-earth-62284.herokuapp.com/"
        projectImage={pizzaHunt}
      ></Project>
      <Project
        name="Food Festival"
        githubLink="https://github.com/bret-short/food-festival"
        deployedLink="https://bret-short.github.io/food-festival/"
        projectImage={foodFestival}
      ></Project>
    </div>
  );
}

export default Portfolio;
