import React, { useState, useEffect, Fragment } from 'react'
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive'

import { breakpoints } from '../../utils';
import Cross from '../../assets/images/cross.svg'
import GoBackArrow from '../../assets/images/arrow.svg'

import { TextEditor } from './TextEditor'

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '16px',
      padding: '35px 30px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const mobileStyles = {
    content: {
        position: "fixed",
        backgroundColor: "white",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column"
    }
}

export const AddFactModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const isMobile = useMediaQuery({
        query: `(max-width: ${breakpoints.sm.max}px)`
    })

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [modalIsOpen]);

    return (
        <Fragment>
            <button className="add-fact-button" onClick={openModal}>Додати факт</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={isMobile? mobileStyles: customStyles}
            >
                <div className="flex justify-between mb-7">
                    <h2 className="order-2 mx-auto md:order-1 md:mx-0 font-bold text-2xl">Додати факт</h2>
                    <img className="order-1 md:order-2 cursor-pointer" src={isMobile ? GoBackArrow: Cross} onClick={closeModal} alt="close" />
                </div>
                <form className="flex flex-col flex-1 justify-between">
                    <input className="mb-6 w-full" placeholder="Назва фейку" />
                    <TextEditor />
                    <div className="flex flex-col md:flex-row justify-between mt-6">
                        <input className="mb-6 md:mb-0" placeholder='Email'/>
                        <button className="button">Надіслати</button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}
