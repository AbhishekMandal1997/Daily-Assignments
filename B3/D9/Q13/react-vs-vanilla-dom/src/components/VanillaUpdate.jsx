import React, { useState } from 'react';

let vanDomUpdateCount = 0;

function VanTitleUpdater() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const el = document.getElementById('vanilla-title');
        if (el) {
            vanDomUpdateCount += 1;
            el.innerText = `Vanilla JS Title ${vanDomUpdateCount}`;
            setCount(vanDomUpdateCount);
        }
    };

    return (
        <div>
            <h2 id="vanilla-title">Vanilla JS Title</h2>
            <button onClick={handleClick}>Change Title (Vanilla JS)</button>
            <p>DOM updates (Vanilla JS): {count}</p>
        </div>
    );
}

export default VanTitleUpdater;
