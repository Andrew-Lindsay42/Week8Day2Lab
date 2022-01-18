import {useState} from "react";
import { updateSighting } from "../containers/SightingService";

const SightingsUpdateForm = (id) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        updateSighting({id}, formData)
        }
    

    return (
        <form onSubmit={onSubmit} id="sightings-update-form" >
            <h2>Update a Sighting</h2>
            <div className="updateFormWrap">
                <label htmlFor="species">Species:</label>
                <input onChange={onChange} type="text" id="species"  />
            </div>
            <div className="updateFormWrap">
                <label htmlFor="location">Location:</label>
                <input onChange={onChange} type="text" id="location"  />
            </div>
            <div className="updateFormWrap">
                <label htmlFor="date">Date:</label>
                <input onChange={onChange} type="date" id="date"  />
            </div>
            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default SightingsUpdateForm;