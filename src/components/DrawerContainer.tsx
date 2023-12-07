import React from 'react';
import Drawer from "react-modern-drawer";
import 'react-modern-drawer/dist/index.css'

interface Props {
    isOpen: boolean
    onClose: () => void,
    children: React.ReactNode
}

const DrawerContainer = ({isOpen, onClose, children}: Props) => {
    return (
        <Drawer open={isOpen}
                onClose={onClose}
                style={{width: '35%'}}
                direction="right"
        >
            {children}

        </Drawer>

    );
};

export default DrawerContainer;