import { combineReducers } from "redux";

import { superheroesReducer } from "./superheroesReducer";

export const rootReducer = combineReducers({
    marvel: superheroesReducer
});
