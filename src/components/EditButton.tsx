import React from 'react';

interface Props {
    onClick: () => void
}

const EditButton = ({onClick}: Props) => {
    return (
        <button
            className="text-[10px] text-darkPurple-900 font-black blur-0"
            onClick={onClick}
        >EDIT</button>
    );
};

export default EditButton;