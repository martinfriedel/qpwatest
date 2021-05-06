import { createStore } from "easy-peasy";
import { persist } from "easy-peasy";

import model, { Model } from "./model";

export interface StoreModel {
  model: Model;
}

const storeModel: StoreModel = {
  model,
};

const store = createStore(persist(storeModel, { storage: "localStorage" }));

export default store;
