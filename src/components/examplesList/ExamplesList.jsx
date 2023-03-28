import React from 'react'
import "./examplesList.css";
import Examples from "../examples/Examples"
import { examples } from "../../data";
import Nav from "../nav/Nav";

export const ExamplesList = () => {
  return (
    <>
     <Nav />
    <div className="pl">
      <div className="pl-list">
        {examples.map((item) => (
          <Examples key={item.id} img={item.img} link={item.link} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
    </>
  );
};

console.log(examples);
export default ExamplesList;
