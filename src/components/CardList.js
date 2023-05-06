import React from "react";
import Card from "./Card"; // uses the card function to create formatted cards

// notice that Card does not need {} because its js file is exporting it as default
// otherwise it would need destructuring curly braces

const CardList = ({ kittens }) => {
  return (
    <div>
      {
        kittens.map((user, i) => { //map function allows react to enumerate cards for better organization
          return (
            <Card
              key={i}
              id={kittens[i].id}
              name={kittens[i].name}
              email={kittens[i].email}
            />
          );
        })
      }
    </div>
  );
}
export default CardList;