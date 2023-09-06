import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './UpdatePlaces.css'
const UpdatePlaces = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
                navigate(`/${id}`);
            })
            .catch((err) => {
                window.alert("Can't update now");
            })
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
                <Link to={`/${id}`} ><p>GO BACK</p></Link>
            </form>
        </div>
    )
};

export default UpdatePlaces;