import React from 'react';
import { AddFactModal } from '../../popovers'

export const Header = () => {
    return (
        <header className="header section">
            <AddFactModal />
            <h1 className="header__title">
                Ти <br />
                мусиш <br />
                знати правду
            </h1>
        </header>
    )
}