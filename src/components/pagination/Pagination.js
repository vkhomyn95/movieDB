import React, {useContext} from 'react';
import './Pagination.scss';
import {DarkThemeContext} from "../../context/DarkThemeContext";

export const Pagination = (props) => {
    const [currentPage, setCurrentPage] = React.useState(props.currentPage);
    let maxPages = props.pages;
    let leftSide = currentPage - 2;
    const darkTheme = useContext(DarkThemeContext);
    const {isDarkTheme} = darkTheme;
    if(leftSide <= 0 ) leftSide=1;
    let rightSide = currentPage + 2;
    if(rightSide>maxPages) rightSide = maxPages;
    const pageLinks = [];
    for (let i = leftSide ; i <= rightSide; i++){
        let active = props.currentPage === i ? 'active' : '';
        // eslint-disable-next-line
        pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={() => {props.nextPage(i); setCurrentPage(i)}}><a className={`page-link ${!isDarkTheme && 'pag-dark'}`} href="#">{i}</a> </li>)
    }
    const nextPage = () => {
        if(currentPage<maxPages){
            setCurrentPage(currentPage+1)
        }
    };

    const prevPage = () => {
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    };


    return (
        <div className="pagination-wrapper">
            <div className="container">
                <div className="row">
                    <nav aria-label="..." className="pagination-content">
                        <ul className={`pagination`}>
                            <li className="page-item ">
                                <span className={`page-link ${!isDarkTheme && 'pag-dark'}`} onClick={prevPage}>Previous</span>
                            </li>
                            {pageLinks}

                            <li className="page-item">
                                // eslint-disable-next-line
                                <a className={`page-link ${!isDarkTheme && 'pag-dark'}`}  onClick={nextPage}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    );
};
