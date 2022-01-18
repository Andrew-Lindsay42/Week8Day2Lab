import { deleteSighting } from "../containers/SightingService"
import { useState } from "react";
import SightingsUpdateForm from "./SightingsUpdateForm";

const SightingCard = ({sighting, removeSighting}) => {
    const [showForm, setShowForm] = useState(false)
    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }

    const handleEdit = () => {
        setShowForm(true)
        
    }
    if(showForm){

    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> <i className="fas fa-trash"></i> </button>
            <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
            <SightingsUpdateForm id = {sighting._id}></SightingsUpdateForm>
            <hr></hr>
        </>
    )}

    else{
        return (
            <>
                <h1>{sighting.species}</h1>
                <p>Location: {sighting.location}</p>
                <p>Date: {sighting.date}</p>
                <button onClick={handleDelete}> <i className="fas fa-trash"></i> </button>
                <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
                <hr></hr>
            </>
        )
    }
}

export default SightingCard;