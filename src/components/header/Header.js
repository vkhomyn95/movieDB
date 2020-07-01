import React, {useEffect, useState} from 'react';
import {UserInfo} from "../user-info/UserInfo";
import {headerDropdownLinks} from "../../constants";
import Logo from '../../assets/logo.png';
import './Header.scss';
import 'font-awesome/css/font-awesome.min.css';

export const Header = () => {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setSmallScreen] = useState(false);
    const [isDropdownLinks, setDropdownLinks] = useState(false);

    const container = React.createRef();

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
    return (
        <div className="may-header" ref={container}>
            <div className="may-header-wrapper navbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="/"><img src={Logo} className="may-header-logo" alt="logo"/></a>
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
                {(!isSmallScreen || isNavVisible ) && (
                    <UserInfo/>
                )}
            </div>
        </div>
    );
};