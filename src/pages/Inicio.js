import React, { useEffect, useState } from 'react';
import { ItemHeroe } from '../components/ItemHeroe';
import axios from 'axios';
import { generateUrl } from '../actions/generateUrl';
import { useDispatch, useSelector } from 'react-redux';
import { getStartSuperheroes } from '../actions/superheroes';

export const Inicio = () => {

    const dispatch = useDispatch();
    const { superheroes } = useSelector(state => state.marvel);

    useEffect(() => {
        dispatch(getStartSuperheroes());
    }, [dispatch])

    if (superheroes.length === 0) {
        return (
            <div className="div-loading"></div>
        )
    } else {
        return (
            <div className='container mt-3'>
                <h1>Superheroes Marvel</h1>
                <div className="row div-superheroes">
                    {
                        superheroes.map((heroe) => (
                            <ItemHeroe info={heroe} key={heroe.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
