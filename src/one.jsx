import React, { useEffect, useState } from "react";
import './one.css'

function Coun() {
    const [cut, setcut] = useState(0);
    const [set, setset] = useState(0);
    const [tab, settab] = useState(0);
    const [tin, settin] = useState(0);

    useEffect(() => {
        if (cut < 1000) {
            setTimeout(() => {
                setcut(c => c + 1); 
            }, 1);
        }
    }, [cut]);

    useEffect(() => {
        if (set < 1000) {
            setTimeout(() => {
                setset(s => s + 1); 
            }, 1);
        }
    }, [set]);

    useEffect(() => {
        if (tab < 1000) {
            setTimeout(() => {
                settab(t => t + 1); 
            }, 1);
        }
    }, [tab]);

    useEffect(() => {
        if (tin < 1000) {
            setTimeout(() => {
                settin(t => t + 1); 
            }, 1);
        }
    }, [tin]);

    return (
        <div className="container">
            <h1>Counter Example</h1>
            <div className="counter-container">
                <p className="counter">{cut}+</p>
                <p className="counter">{set}+</p>
                <p className="counter">{tab}+</p>
                <p className="counter">{tin}+</p>
            </div>
        </div>
    );
}

export default Coun;
