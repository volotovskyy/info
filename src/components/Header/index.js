import React, { Fragment} from 'react';
import { useMediaQuery } from 'react-responsive'

import { AddFactModal } from '../../popovers'

export const Header = () => {
   const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    })

    const headerTitle = (
        <h1 className="header__title">
            Ти <br />
            мусиш <br />
            знати правду
        </h1>
    )

    if (isMobile) {
        return (
            <Fragment>
                <header className="header mb-3">
                    {headerTitle}
                </header>
                <AddFactModal />
            </Fragment>
        )
    }

    return (
        <header className="header section">
            <AddFactModal />
            {headerTitle}
        </header>
    )
}