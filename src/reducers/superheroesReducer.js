import { types } from "../types/types";

const initialState = {
    superheroes: []
};

export const superheroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getSuperheroes:
            return {
                ...state,
                superheroes: action.payload
            }

        default:
            return state;
    }
}
