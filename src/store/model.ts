import { action, Action, Thunk, thunk } from "easy-peasy";

export interface Model {
  randomStrings: string[];

  // actions
  addString: Action<Model, string>;
}

const model: Model = {
  randomStrings: [],

  addString: action((state, newStr) => {
    state.randomStrings.push(newStr);
  }),
};

export default model