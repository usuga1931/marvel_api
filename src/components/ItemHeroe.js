import React from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router-dom'

export const ItemHeroe = ({ info }) => {
    return (
        <div className="col-4 item-hero">
            <div className="card">
                <img className="card-img-top" src={`${info.thumbnail.path}.${info.thumbnail.extension}`} alt="Card image cap" />

                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <p className="card-text">{info.description}</p>
                    <Link to={`./heroe/${info.id}`} className="btn btn-primary">Show more</Link>
                </div>
            </div>
        </div>
    )
}
