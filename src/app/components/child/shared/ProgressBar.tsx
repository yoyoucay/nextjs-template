import React from 'react';

interface ProgressBarProps {
    fillPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ fillPercentage }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${fillPercentage}%` }}></div>
        </div>
    );
}

export default ProgressBar;