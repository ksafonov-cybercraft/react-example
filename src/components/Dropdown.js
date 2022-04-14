import React, {useEffect} from 'react';
import {createPortal} from "react-dom";

const Dropdown = ({isOpen, children, onOutsideClick, parentRef}) => {
    console.log(children);
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && parentRef.current && !parentRef.current.contains(e.target)) {
                onOutsideClick(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen])
    // if (!isOpen) return null
    return createPortal(
        <div className={isOpen ? "class1" : "class2"}>
            {children}
        </div>, parentRef.current)
};

export default Dropdown;
