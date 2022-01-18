import { deleteSighting } from "../containers/SightingService"
import { useState } from "react";
import SightingsUpdateForm from "./SightingsUpdateForm";

const SightingCard = ({sighting, removeSighting, updateSighting}) => {
    const [showForm, setShowForm] = useState(false)

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
        <div className="sighting-card">
            <div>
                <h1>{sighting.species}</h1>
                <p>Location: {sighting.location}</p>
                <p>Date: {sighting.date}</p>
                <button onClick={handleDelete}> <i className="fas fa-trash"></i> </button>
                <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
            </div>
            <SightingsUpdateForm sighting = {sighting} setShowForm = {setShowForm} updateSighting={updateSighting}></SightingsUpdateForm>
        </div>
        </>
    )}

    else{
        return (
            <>
            <div className="sighting-card">
            <div>
                <h1>{sighting.species}</h1>
                <p>Location: {sighting.location}</p>
                <p>Date: {sighting.date}</p>
                <button onClick={handleDelete}> <i className="fas fa-trash"></i> </button>
                <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
            </div>
            </div>
            </>
        )
    }
}

export default SightingCard;