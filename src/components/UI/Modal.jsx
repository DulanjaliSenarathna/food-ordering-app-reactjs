import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export default function Modal({ children, open , className=''}) {

    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        }
        return ()=> dialog.current.close();
    }, [open]);
    return createPortal(<dialog ref={dialog} className={`modal ${className}`}>
        {children}
    </dialog>, document.getElementById('modal'))
}