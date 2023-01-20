import "./travel_journal.css";
import Card from "./Card"
import travelData from "./TravelData"
import Navbar from "./Navbar"
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
        <div className="page">
            <Navbar />
            <div className="travel-journal">
                {travel_cards}
            </div>
        </div>
        
    )
}
export default TravelJournal;
