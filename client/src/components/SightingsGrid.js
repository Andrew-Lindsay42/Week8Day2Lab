import SightingCard from "./SightingCard";

const SightingsGrid = ({sightings, removeSighting, updateSighting}) => {
    const sightingsList = sightings.map((sighting) =>{
        return( 
        <div key={sighting._id}>
        <SightingCard sighting={sighting} removeSighting={removeSighting} updateSighting={updateSighting} />
        <hr/>
        </div>
        )});
    
    return (
        <>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;