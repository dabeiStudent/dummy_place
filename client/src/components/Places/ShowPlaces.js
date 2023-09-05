import React, { useEffect, useState } from "react";
import axios from "axios";
import PlaceCard from "./PlaceCard";

import './ShowPlaces.css'
const ShowPlaces = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then((res) => {
                setPlaces(res.data);
            }).catch((err) => {
                console.log('Error from ShowPlaces');
            });
    }, []);

    const placeList =
        places.length === 0 ? "Loading..." : places.map((place, k) => <PlaceCard place={place} key={k} />);
    return (
        <React.Fragment>
            <div className="title"><h1>ALL PLACES</h1></div>
            <div className="place-list">{placeList}</div>
        </React.Fragment>
    )
};

export default ShowPlaces;