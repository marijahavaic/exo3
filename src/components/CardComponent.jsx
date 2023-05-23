import React from "react";

const CardComponent = ({ person }) => {
    return (
        <div className="Card">
            <img src={person.img} alt={person.name} />
            <div className="personalDetails">
                <h2>{person.name}</h2>
                <small>{person.age} years</small>
            </div>
        </div>
    );
};

export default CardComponent;
