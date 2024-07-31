"use client";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React, { useState } from 'react';

const ModalSpaces = () => {

    const [modal, setModal] = useState(0);

    function openModal(){
        setModal(1);
    }
    function closeModal(){
        setModal(0);
    }

    return (
        <div className="modal-spaces-container">
            <div className={`modal-container bg-light1 rounded-t-lg w-full py-3 flex flex-col z-10 ${modal?"absolute bottom-0 left-0":"hidden"}`}>
                <button className="text-left text-3xl px-7 py-3">Learning</button>
                <button className="text-left text-3xl px-7 py-3">Exercise</button>
                <button className="text-left text-3xl px-7 py-3">Spirituality</button>
            </div>
            <button className={`modal-close cursor-default w-screen h-screen bg-dark1/30 backdrop-blur-lg ${modal?"absolute top-0 left-0":"hidden"}`} onClick={closeModal}></button>
            <button className="modal-trigger w-full text-xl text-left font-semibold px-3 pt-3 flex items-center" onClick={openModal}>Learning<Icon icon="hugeicons:arrow-down-01"/></button>
        </div>
    );
};

export default ModalSpaces;