import React, { Fragment } from 'react'
import Modal from 'react-modal';
import Cross from '../../assets/images/cross.svg'

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

export const AddFactModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Fragment>
            <button className="add-fact-button" onClick={openModal}>Додати факт</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}                    
            >
                <div className="flex justify-between mb-7">
                    <h2 className="font-bold text-2xl">Додати факт</h2>
                    <img className="cursor-pointer" src={Cross} onClick={closeModal} alt="close" />
                </div>
                <form>
                    <input className="mb-6 w-full" placeholder="Назва фейку" />
                    <TextEditor />
                    <div className="flex justify-between mt-6">
                        <input placeholder='Email'/>
                        <button className="button">Надіслати</button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}
