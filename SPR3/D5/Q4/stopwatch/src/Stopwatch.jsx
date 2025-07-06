import React, { useState, useEffect } from 'react';

const soundUrl = 'https://www.soundjay.com/button/sounds/beep-07.mp3';

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prev) => {
                    const updated = prev + 1;

                    if (updated === 10) {
                        const audio = new Audio(soundUrl);
                        audio.play().catch(() => console.log("🔔 Sound triggered at 10 seconds"));
                    }

                    return updated;
                });
            }, 1000);
        } else if (!isRunning && interval) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <div style={styles.container}>
            <h1>Stopwatch</h1>
            <div style={styles.time}>{seconds} seconds</div>
            <div style={styles.buttons}>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '30px',
        fontFamily: 'Arial',
    },
    time: {
        fontSize: '32px',
        margin: '20px 0',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
};

export default Stopwatch;
