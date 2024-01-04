import React from 'react';

interface Props {
    extraClasses?: string
}

const Spinner = ({extraClasses = ''}: Props) => {
    return (
        <div className={`animate-spin rounded-full border-t-2 border-b-2 border-white h-8 w-8 ${extraClasses}`}></div>
    );
};

export default Spinner;