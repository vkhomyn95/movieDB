import React, {useEffect, useState} from 'react';
import {UserInfo} from "../user-info/UserInfo";
import Logo from '../../assets/logo.png';
import './Header.scss';
import 'font-awesome/css/font-awesome.min.css';

export const Header = () => {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setSmallScreen] = useState(false);

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 936px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    };
    return (
        <div className="may-header">
            <div className="may-header-wrapper navbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src={Logo} className="may-header-logo" alt="logo"/>
                </nav>
                <button onClick={toggleNav} className="toggler"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></button>
                <form className="may-header-search-form">
                    <input type="text"
                           className="may-header-input"
                           placeholder="&#xF002;"
                    />
                </form>
                {(!isSmallScreen || isNavVisible ) && (
                    <UserInfo/>
                )}
            </div>
        </div>
    );
};