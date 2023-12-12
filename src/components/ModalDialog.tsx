import React from 'react';
import Modal from 'react-modal';

interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
    contentWidth?: string
    children: React.ReactNode;
    shouldCloseOverlayClick?: boolean
    padding?: string
}

interface CustomStyles {
    content: React.CSSProperties;
    overlay: React.CSSProperties;
}


const ModalDialog = ({
                         isOpen,
                         onRequestClose,
                         children,
                         shouldCloseOverlayClick = true,
                         contentWidth = "33%",
                         padding = "0"
                     }: Props) => {
    const customStyles: CustomStyles = {
        content: {
            width: contentWidth,
            margin: "0 auto",
            padding: padding


        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={shouldCloseOverlayClick}
            shouldCloseOnEsc={shouldCloseOverlayClick}
            ariaHideApp={false}

            style={customStyles}
        >
            {children}
        </Modal>
    )
};

export default ModalDialog;