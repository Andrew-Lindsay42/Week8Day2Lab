import {useState} from "react";
import { putSighting } from "../containers/SightingService";

const SightingsUpdateForm = ({sighting, setShowForm, updateSighting}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        putSighting(sighting._id, formData)
        .then((data)=>{
            updateSighting(data._id, data)})
        setShowForm(false);
        }
    

    return (
        <form onSubmit={onSubmit} id="sightings-update-form" >
            <h2>Update a Sighting</h2>
            <div className="updateFormWrap">
                <label htmlFor="species">Species:</label>
                <input onChange={onChange} type="text" id="species" placeholder={sighting.species} />
            </div>
            <div className="updateFormWrap">
                <label htmlFor="location">Location:</label>
                <input onChange={onChange} type="text" id="location" placeholder={sighting.location}/>
            </div>
            <div className="updateFormWrap">
                <label htmlFor="date">Date:</label>
                <input onChange={onChange} type="date" id="date" placeholder={sighting.date}/>
            </div>
            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default SightingsUpdateForm;