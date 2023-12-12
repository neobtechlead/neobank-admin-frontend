import React from 'react';
import ModalDialog from "@/components/ModalDialog";
import SuccessContent from "@/components/SuccessContent";


interface Props {
    isOpen: boolean
    onRequestClose: () => void
    title: string
    description: string
    onClick: () => void
    btnLabel: string | React.ReactNode

}

const SuccessPopUp = ({onRequestClose, isOpen, title, description, onClick, btnLabel}: Props) => {
    return (
        <ModalDialog
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentWidth="60%"
            padding="10px 40px"
        >
            <SuccessContent title={title}
                            description={description}
                            onClick={onClick}
                            btnLabel={btnLabel}
            />
        </ModalDialog>
    );
};

export default SuccessPopUp;