import { useCallback } from "react";

import { AiOutlineClose } from "react-icons/ai"

import Button from "./Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {
    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        onClose();
    }, [disabled, onClose]);    

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
            className="
                fixed
                flex
                justify-center
                items-center
                overflow-x-hidden
                overflow-y-auto
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800
                bg-opacity-70
            "
            >
                <div 
                    className="
                        relative
                        h-full
                        lg:h-auto
                        w-full
                        lg:w-3/6
                        lg:max-w-3xl
                        my-6
                        mx-auto

                    ">
                    {/*--Content--*/}
                    <div
                        className="
                            relative
                            flex
                            flex-col
                            h-full
                            lg:h-auto
                            w-full
                            border-0
                            rounded-lg
                            shadow-lg
                            bg-black
                            outline-none
                            focus:outline-none
                        "
                    >
                        {/*--Header--*/}
                        <div
                        className="
                            flex
                            justify-between
                            items-center
                            p-10
                            rounded-t
                        "
                        >
                            <h3 className="text-3xl font-semibold text-white">{title}</h3>
                            <button
                                onClick={handleClose} 
                                className="
                                    p-1
                                    ml-auto
                                    border-0
                                    text-white
                                    hover:opacity-70
                                    transition
                                    ">
                                <AiOutlineClose size={25} />
                            </button>
                        </div>
                        {/*--Body--*/}
                        <div className="relative flex-auto p-10">
                            {body}
                        </div>
                        {/*--Footer--*/}
                        <div className="flex flex-col gap-2 p-10">
                            <Button 
                                disabled={disabled} 
                                label={actionLabel} 
                                secondary 
                                fullWidth 
                                large 
                                onClick={handleSubmit} 
                            />
                            {footer}
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
};

export default Modal;