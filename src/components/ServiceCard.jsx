import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className={`service__card ${props.class}`}>
            <div className="card__container">
                <h4>{props.title}</h4>
                <span>{props.icon}</span>
            </div>
        </div>
    )
}

export default ServiceCard
