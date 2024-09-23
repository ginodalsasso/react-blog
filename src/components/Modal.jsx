import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children, onClose }) {
    const dialogRef = useRef(null); // on crée une référence pour le dialog

    useEffect(() => {
        dialogRef.current.showModal();
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose?.(); // si onClose est défini, on l'appelle
    };

    return createPortal(
        <dialog 
            style={{width: 'calc(100vw - 2rem)', maxWidth: '600px'}}
            ref={dialogRef} 
            onCancel={handleClose} 
            onClose={handleClose}
        >
            {children}
        </dialog>
        , document.body
    );
}
