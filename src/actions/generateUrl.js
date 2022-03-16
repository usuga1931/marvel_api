export const generateUrl = (data) => {
    const md5 = require("blueimp-md5");

    const baseUrlMarvelAPI = process.env.REACT_APP_MARVEL_API;
    const baseMarvelAPIKEY = process.env.REACT_APP_API_KEY;
    const baseUrlMarvelPRIVATEKEY = process.env.REACT_APP_PRIVATE_KEY;

    let hash = md5(`1${baseUrlMarvelPRIVATEKEY}${baseMarvelAPIKEY}`);

    let url = '';

    switch (data.action) {
        case 'all_superheroes':
            url = `${baseUrlMarvelAPI}?ts=1&apikey=${baseMarvelAPIKEY}&hash=${hash}`;
            break;

        case 'superhero_by_id':
            url = `${baseUrlMarvelAPI}/${data.heroeID}?ts=1&apikey=${baseMarvelAPIKEY}&hash=${hash}`;
            break;

        default:
            break;
    }

    return url;
}