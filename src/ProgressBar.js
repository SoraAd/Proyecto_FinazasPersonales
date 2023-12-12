import React, { useState, useEffect } from "react";
import './App.css';


const ProgressBar = () => {
    const currentSavings = 2500;
    const totalSavings = 5000;

    // Calculate the percentage completion
    const progress = (currentSavings / totalSavings) * 100;

    const progressBarStyle = {
        width: '80%', // Adjust the width of the progress bar
        height: '20px', // Adjust the height of the progress bar
        backgroundColor: '#e0e0e0', // Set the background color
        borderRadius: '10px', // Add rounded corners
        margin: '20px 0', // Add margin for spacing
    };

    const fillStyle = {
        width: `${progress}%`, // Set the width of the filled portion
        height: '100%', // Match the height of the progress bar
        backgroundColor: '#4caf50', // Set the color of the filled portion
        borderRadius: 'inherit', // Preserve the rounded corners
    };

    return (
        <div className="progress-bar-container">
            <div style={progressBarStyle}>
                <div style={fillStyle}></div>
            </div>
            <p>{`${currentSavings} / ${totalSavings}`}</p>
        </div>
    );
};
export default ProgressBar;
