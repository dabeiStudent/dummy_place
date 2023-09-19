import React, { useEffect, useState } from "react";
import axios from "axios";
import PlaceCard from "./PlaceCard";

import './ShowPlaces.css'
import Loading from "../UIElements/Loading";
const ShowPlaces = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const PORT = process.env.PORT || 5000
        axios.get(`/`)
            .then((res) => {
                setPlaces(res.data);
            }).catch((err) => {
                window.alert("Can't load places from database");
            });
    }, []);

    if (places.length === 0) {
        return <Loading />
    }
    const placeList = places.map((place, k) => <PlaceCard place={place} key={k} />);
    return (
        <React.Fragment>
            <div className="title"><h1>ALL PLACES</h1></div>
            <div className="place-list">{placeList}</div>
        </React.Fragment>
    )
};

export default ShowPlaces;