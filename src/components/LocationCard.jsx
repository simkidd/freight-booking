import React from 'react'

const LocationCard = (props) => {
    return (
        <div className={`location__card ${props.class}`}>
            <p>{props.title}</p>
        </div>
    )
}

export default LocationCard
