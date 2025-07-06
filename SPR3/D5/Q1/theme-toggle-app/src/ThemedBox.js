import React from 'react';

function ThemedBox({ theme, text }) {
    const boxStyle = {
        padding: '20px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
    };

    return <div style={boxStyle}>{text}</div>;
}

export default ThemedBox;
