import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { generateUrl } from '../actions/generateUrl';

export const HeroeScreen = () => {

    const { heroeID } = useParams();

    const url = generateUrl({ action: 'superhero_by_id', heroeID });

    const [hero, setHero] = useState([]);


    useEffect(() => {
        const getHeroe = async () => {
            await axios.get(url).then((response) => {
                const { data: { results } } = response['data'];

                setHero(results[0]);
            })
        }

        getHeroe();
    }, [])

    if (hero.length === 0) {
        return (
            <div className="div-loading"></div>
        )
    } else {
        return (
            <div className="container mt-3 heroe-screen">
                <div className="card">
                    <h5 className="card-header">{hero.name}</h5>
                    <div className="card-body">
                        <img className="card-img-top" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Card image cap" />
                        <p className="card-text mt-3">{hero.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
