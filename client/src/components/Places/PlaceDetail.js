import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './PlaceDetail.css'
import Loading from "../UIElements/Loading";

const PlaceDetail = props => {
    const { id } = useParams();
    const [place, setPlace] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/${id}`)
            .then((res) => {
                setPlace(res.data);
            }).catch((err) => {
                console.log('Some error occured');
            });
        window.scrollTo(0, 0);
    }, [id])
    const updatePlaceHandler = () => {
        window.location = `http://localhost:3000/update-place/${id}`;
    }
    const removePlaceHandler = event => {
        event.preventDefault();

        if (window.confirm('Are you sure to delete this place?')) {
            axios.post(`http://localhost:5000/drop-this-place/${id}`)
                .then((res) => {
                    window.location = "http://localhost:3000";
                })
        }
    }

    if (place._id === undefined) {
        return <Loading />;
    }
    return (
        <div className="place-detail">
            <table className="table-of-content">
                <tbody>
                    <tr>
                        <th>Place ID: </th>
                        <td>{place._id}</td>
                    </tr>
                    <tr>
                        <th>Place name: </th>
                        <td>{place.title}</td>
                    </tr>
                    <tr>
                        <th>Description: </th>
                        <td>{place.description}</td>
                    </tr>
                    <tr>
                        <th>Place Rating: </th>
                        <td>{place.rating === 1 ? place.rating + " star" : place.rating + " stars"}</td>
                    </tr>
                </tbody>
            </table>
            <div className="action-place">
                <button onClick={updatePlaceHandler}>Update</button>
                <button onClick={removePlaceHandler}>Delete</button>
            </div>
        </div>
    )
};

export default PlaceDetail;