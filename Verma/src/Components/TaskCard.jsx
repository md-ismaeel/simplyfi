// TaskCard.js
import React from 'react';

const TaskCard = ({ title, description }) => {
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
        </div>
    );
};

export default TaskCard;