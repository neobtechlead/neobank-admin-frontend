import React from 'react';

const RedirectingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-10 h-10 rounded-full border border-purple-800 animate-spin">
                <div className="w-full h-full bg-purple-700 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-purple-600 absolute top-0 left-0"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500 absolute top-0 right-0"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400 absolute bottom-0 left-0"></div>
                <div className="w-3 h-3 rounded-full bg-purple-300 absolute bottom-0 right-0"></div>
            </div>
        </div>


    );
};

export default RedirectingSpinner;
