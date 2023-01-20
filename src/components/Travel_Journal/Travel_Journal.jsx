import "./travel_journal.css";
import Card from "./Card"
import travelData from "./TravelData"

function TravelJournal(){

    const travel_cards = travelData.map( item =>
        {
            return (
                <Card
                    item = {item}
                />
            )
            
        } )

    return (
        <div className="travel-journal">
            {travel_cards}
        </div>
    )
}
export default TravelJournal;
