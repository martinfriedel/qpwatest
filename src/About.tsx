import React from "react";
import { useStoreActions, useStoreState } from "./store/hooks";

const About: React.FC = () => {
  const addString = useStoreActions((actions) => actions.model.addString);
  const randomStrings = useStoreState((state) => state.model.randomStrings);

  return (
    <div>
      <h1>Random items:</h1>
      {randomStrings.map((str: string) => {
        return <li>{str}</li>;
      })}
      <button onClick={() => addString("s"+Math.random())}>add one</button>
    </div>
  );
};

export default About;
