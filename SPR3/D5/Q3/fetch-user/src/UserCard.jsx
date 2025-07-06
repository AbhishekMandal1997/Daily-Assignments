import React from 'react';

function UserCard({ name, email, city }) {
    return (
        <div style={styles.card}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '6px',
        padding: '10px',
        margin: '10px 0',
        maxWidth: '400px',
    },
};

export default UserCard;
