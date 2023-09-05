import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = props => {
    return (
        <div className="card-container">
            <Link to={`/${props.place._id}`}>
                <img
                    src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/dark-souls/a/a5/3xCuCoK.jpg'
                    alt='place'
                    height={200}
                />
            </Link>
            <div className="desc">
                <h2>
                    <Link to={`/${props.place._id}`}>{props.place.title}</Link>
                </h2>
                <h3>{props.place.description}</h3>
                <p>{props.place.rating === 1 ? props.place.rating + " star" : props.place.rating + " stars"}</p>
            </div>
        </div>
    )
};

export default PlaceCard;