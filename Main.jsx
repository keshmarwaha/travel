import React from "react"

export default function Main(props) {
    return (
        <div className="main--container">
            <img className="main--pic" src={props.item.imageUrl} />
              <div className="main--column">
                 <div className="main--header">
                     <p>{props.item.location}</p>
                     <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                 </div>
                 <p className="main--title">{props.item.title}</p>
                 <p className="main--date">{props.item.startDate} - {props.item.endDate}</p>
                 <p className="main--text">{props.item.description}</p>
             </div>
        </div>
    )
}