import React from 'react';


function TravelCard(props) {
    return (
        <div className="travel-card">
            <div className="travel-image"><img src={props.item.imageUrl} /></div>
            <div className="travel-info">
                <div className="travel-info-1">
                    <div className="country">
                        <i class="material-icons">place</i> {props.item.location}
                    </div>
                    <div className="map-link">
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                </div>

                <div className="travel-info-2">
                    <div className="travel-place">{props.item.title}</div>
                </div>

                <div className="travel-info-3">
                    {props.item.startDate} - {props.item.endDate}
                </div>

                <div className="travel-info-4">
                    <div className="travel-description"> {props.item.description} </div>
                </div>


            </div>
        </div>
    )
}
export default TravelCard;
