import axios from "axios";
import { types } from "../types/types";
import { generateUrl } from "./generateUrl";

export const getStartSuperheroes = () => {
    return async (dispatch) => {
        try {
            const url = generateUrl({ action: 'all_superheroes' });

            const resp = await axios.get(url);
            const { data: { results } } = resp['data'];

            dispatch(getSuperheroes(results));
        } catch (error) {
            console.log(error);
        }
    }
}

const getSuperheroes = (superheros) => ({
    type: types.getSuperheroes,
    payload: superheros
})
