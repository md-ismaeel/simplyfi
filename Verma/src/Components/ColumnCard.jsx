// ColumnCard.js
import React from 'react';
import TaskCard from './TaskCard';

const ColumnCard = ({ columnTitle, tasks }) => {
    return (
        <div className="column">
            <h2 className="column__title">{columnTitle}</h2>
            <div className="column__cards">
                {tasks.map((task) => (
                    <TaskCard key={task?.id} title={task?.title} description={task?.description} />
                ))}
            </div>
        </div>
    );
};

export default ColumnCard;