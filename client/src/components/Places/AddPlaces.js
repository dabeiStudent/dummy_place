import React, { useState } from "react";
import axios from 'axios';

import './AddPlaces.css';
const AddPlaces = props => {
    const [place, setPlace] = useState({
        title: '',
        description: '',
        rating: ''
    });

    const onChange = event => {
        setPlace({ ...place, [event.target.name]: event.target.value });
        console.log(place);
    }

    const addNewPlaceHandler = event => {
        event.preventDefault();

        axios.post('http://localhost:5000/create-new-place', place)
            .then((res) => {
                alert('Added successfully');
                setPlace({
                    title: '',
                    description: '',
                    rating: ''
                });
            })
            .catch((err) => {
                console.log('Error in CreateBook!');
            })
    }
    return (
        <div className="new-place-form">
            <form className="form-add-new" onSubmit={addNewPlaceHandler}>
                <label>Title: </label>
                <input name="title" value={place.title} type="text" required placeholder="Input your place title here" onChange={onChange} /><br />

                <label>Description: </label>
                <input name="description" value={place.description} type="text" required placeholder="Input your place description here" onChange={onChange} /><br />

                <label>Rating: </label>
                <input name="rating" value={place.rating} type="text" required placeholder="Input your place rating here" onChange={onChange} /><br />

                <input type="submit" value="ADD PLACES" />
            </form>
        </div>
    )
};

export default AddPlaces;