import React, { useState } from 'react';

function RctTitleUpdater() {
    const [title, setTitle] = useState('React Title');
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
        setTitle(`React Title ${count + 1}`);
    };

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={handleClick}>Change Title (React)</button>
            <p>DOM updates (React): {count}</p>
        </div>
    );
}

export default RctTitleUpdater;
