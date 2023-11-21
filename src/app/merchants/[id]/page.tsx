import React from 'react';

interface Props {
    params: {
        id: string
    }

}

const Merchant = ({params: {id}}: Props) => {
    return (
        <div>
            {id}
        </div>
    );
};

export default Merchant;