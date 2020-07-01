import React, {useContext, useEffect, useState} from 'react';
import {UserInfo} from "../user-info/UserInfo";
import {headerDropdownLinks} from "../../constants";
import Logo from '../../assets/logo.png';
import LogoDark from '../../assets/logo-dark.png'
import './Header.scss';
import 'font-awesome/css/font-awesome.min.css';
import {DarkThemeContext} from "../../context/DarkThemeContext";

export const Header = () => {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setSmallScreen] = useState(false);
    const [isDropdownLinks, setDropdownLinks] = useState(false);

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
        setDropdownLinks(!isDropdownLinks);
    };

    // const handleClickOutside = event => {
    //     if (container.current && !container.current.contains(event.target)) {
    //         this.setState({
    //             open: false,
    //         });
    //     }
    // };

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
    const darkTheme = useContext(DarkThemeContext);
    const {isDarkTheme,toggleTheme} = darkTheme;
    return (
        <div className={`${!isDarkTheme ? 'may-header-dark' : 'may-header' } ref={container}`}>
            <div className="may-header-wrapper navbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="/"><img src={`${isDarkTheme ? Logo : LogoDark}`} className="may-header-logo" alt="logo"/></a>
                </nav>
                <div className="dropdown-wrapper">
                    <button onClick={toggleNav} className="toggler"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></button>
                    <div className={`dropdown-content${isDropdownLinks ? '-toggled' : '' }`}>
                        <ul id="header-links-nav">
                            { isDropdownLinks &&
                            headerDropdownLinks.map((el, key) => (
                                <li id={el.ref} key={key} >{ el.name }</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>

                <form className="may-header-search-form">
                    <input type="text"
                           className="may-header-input"
                           placeholder="&#xF002;"
                    />
                </form>
                <button className={`btn btn-primary ${isDarkTheme && 'dark'}`} onClick={toggleTheme}>Dark mode: {!isDarkTheme ? 'on' : 'off'}</button>
                {(!isSmallScreen || isNavVisible ) && (
                    <UserInfo/>
                )}
            </div>
        </div>

    );
};