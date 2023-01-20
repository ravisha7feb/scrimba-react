import React from 'react';


function TravelCard(props) {
    return (
        <div className="travel-card">
            <div className="travel-image">"Img"</div>
            <div className="travel-info">
                <div className="travel-info-1">
                    <div className="country">
                        Map_Logo "Location"
                    </div>
                    <div className="map-link">
                        <a href="map_link">View on Google Maps</a>
                    </div>
                </div>

                <div className="travel-info-2">
                    <h1>"Name of place"</h1>
                </div>

                <div className="travel-info-3">
                    "From_Date" - "To_Date"
                </div>

                <div className="travel-info-4">
                    <p>"Description"</p>
                </div>


            </div>
        </div>
    )
}
export default TravelCard;
