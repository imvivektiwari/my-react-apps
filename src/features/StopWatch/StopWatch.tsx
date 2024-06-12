import React, { useEffect, useRef, useState } from 'react'

function StopWatch() {
    const [time, setTime]: any = useState(0);
    const [now, setNow]: any = useState(0);
    const [intervalId, setIntervalId]: any = useState(null);
    const [lap, setLap]: any = useState([]);

    const diff = ((time - now) / 1000).toFixed(3);

    useEffect(() => {
        return () => stop();
    }, []);

    const start = () => {
        if (intervalId) {
            return;
        }
        setNow(Date.now());
        setTime(Date.now());
        const interval = setInterval(() => {
            setTime(Date.now());
        }, 100);

        setIntervalId(interval);
    };

    const stop = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const handleLap = () => {
        setLap((prev: any[])=> [...prev, diff]);
    }

    return (
        <div>
            <p>{diff}</p>
            <button className="btn" onClick={start} disabled={intervalId}>Start</button>
            <button className="btn" onClick={stop} disabled={!intervalId}>Stop</button>
            <button className="btn" onClick={handleLap}>Lap</button>
            {
                lap.map((time: any, index: number) => {
                    return <p key={`${index}-${time}`}>{time}</p>
                })
            }
        </div>
    )
}

export default StopWatch