import React from 'react';

interface Props {
    overrideClassNames?: string
}

const LoadingSpinner = ({overrideClassNames}: Props) => {
    return (
        <div className=" overflow-auto w-full h-full flex items-center justify-center">
            <div
                className={`animate-spin rounded-full border-t-2 border-b-2 border-darkPurple-900 h-12 w-12 ${overrideClassNames}`}></div>
        </div>
    );
};

export default LoadingSpinner;