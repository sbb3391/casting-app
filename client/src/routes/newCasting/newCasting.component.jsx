import './newCasting.styles.scss'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewCasting = () => {

    const [newCasting, setNewCasting] = useState({})
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:4040/api/v1/castings', newCasting)
        .then( resp => {
            navigate(`/castings/${resp.data._id}`)
        })

    }

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;

        setNewCasting({
            ...newCasting,
            [name]: value
        })
    }

    return(
        <>
            <h1>Create a new Casting</h1>

            <form onSubmit={handleFormSubmit} >
                <label>Company</label>
                <input name="company" type="text" onChange={handleInputChange} value={newCasting.company} />
                <br />
                <label>ImageUrl</label>
                <input name="castingImageUrl" type="text" onChange={handleInputChange} value={newCasting.castingImageUrl} />
                <br />
                <label>Location</label>
                <input name="location" type="text" onChange={handleInputChange} value={newCasting.location} />
                <br />
                <label>Start Date</label>
                <input name="startDate" type="date" onChange={handleInputChange} value={newCasting.startDate} />
                <br />
                <label>End Date</label>
                <input name="endDate" type="date" onChange={handleInputChange} value={newCasting.endDate} />
                <br />
                <label>Pay</label>
                <input name="pay" type="text" onChange={handleInputChange} value={newCasting.pay} />
                <br />
                <input type="submit" value="Create new casting" />
            </form>
        </>
    )
}

export default NewCasting;