import React from 'react';
import { Search } from '@material-ui/icons';
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="header__left">
                    <div className="logo">
                        <h3>send<span>freight</span></h3>
                    </div>
                    <div className="search__container">
                        <input type="search" placeholder='Search' />
                            <Search />
                    </div>
                </div>
                <div className="header__right">
                    <PrimaryButton title='Request Quote' />
                    <SecondaryButton title='Book Shipment' />
                </div>
            </div>
        </header>
    )
}

export default Header
