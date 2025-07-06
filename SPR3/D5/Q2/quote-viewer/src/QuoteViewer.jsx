import React, { useState, useEffect } from 'react';

function QuoteViewer() {
    const [quote, setQuote] = useState({ content: '', author: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchQuote = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(
                'https://api.allorigins.win/raw?url=https://zenquotes.io/api/random'
            );
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            const first = data[0]; // ZenQuotes returns an array
            setQuote({ content: first.q, author: first.a });
        } catch (err) {
            console.error(err);
            setError('Failed to load quote.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
        const intervalId = setInterval(fetchQuote, 30000); // Auto-refresh every 30s
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={styles.container}>
            <h1>Daily Quote Viewer</h1>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <blockquote style={styles.quote}>
                    “{quote.content}”
                    <footer style={styles.author}>— {quote.author}</footer>
                </blockquote>
            )}

            <button onClick={fetchQuote} style={styles.button}>
                Get New Quote
            </button>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '40px',
    },
    quote: {
        fontSize: '1.5rem',
        margin: '20px auto',
        maxWidth: '600px',
        lineHeight: '1.6',
        color: '#444',
    },
    author: {
        marginTop: '10px',
        fontStyle: 'italic',
        fontSize: '1rem',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default QuoteViewer;
