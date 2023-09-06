import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './UpdatePlaces.css'
const UpdatePlaces = () => {
    const { id } = useParams();
    const [place, setPlace] = useState({
        title: '',
        description: '',
        rating: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/${id}`)
            .then((res) => {
                setPlace({
                    title: res.data.title,
                    description: res.data.description,
                    rating: res.data.rating
                });
            })
            .catch((err) => {
                console.log('Error');
            })
    }, [id]);

    const onChange = event => {
        setPlace({ ...place, [event.target.name]: event.target.value });
    }

    const updatePlaceHandler = event => {
        event.preventDefault();
        const data = {
            title: place.title,
            description: place.description,
            rating: place.rating
        };
        axios.post(`http://localhost:5000/update-place/${id}`, data)
            .then((res) => {
                window.alert('Update successfully');
                window.location = `http://localhost:3000/${id}`;
            })
    }
    const goBackHandler = event => {
        event.preventDefault();
        window.location = `http://localhost:3000/${id}`;
    }
    return (
        <div className="update-place-form">
            <form className="form-update" onSubmit={updatePlaceHandler}>
                <label>Title: </label>
                <input name="title" value={place.title} type="text" required placeholder="Input your place title here" onChange={onChange} /><br />

                <label>Description: </label>
                <input name="description" value={place.description} type="text" required placeholder="Input your place description here" onChange={onChange} /><br />

                <label>Rating: </label>
                <input name="rating" value={place.rating} type="text" required placeholder="Input your place rating here" onChange={onChange} /><br />

                <input type="submit" value="UPDATE PLACE" />
                <input type="button" value="GO BACK" onClick={goBackHandler} />
            </form>
        </div>
    )
};

export default UpdatePlaces;