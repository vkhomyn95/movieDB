import React from 'react';
import './Pagination.scss';

export const Pagination = (props) => {
    const [currentPage, setCurrentPage] = React.useState(props.currentPage);
    let maxPages = props.pages;
    let leftSide = currentPage - 2;
    if(leftSide <= 0 ) leftSide=1;
    let rightSide = currentPage + 2;
    if(rightSide>maxPages) rightSide = maxPages;
    const pageLinks = [];
    for (let i = leftSide ; i <= rightSide; i++){
        let active = props.currentPage == i ? 'active' : '';
        pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={() => {props.nextPage(i); setCurrentPage(i)}}><a className="page-link" href="#">{i}</a> </li>)
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
        <div className="container">
            <div className="row">
                <nav aria-label="..." className="pagination-content">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link" onClick={prevPage}>Previous</span>
                        </li>
                        {pageLinks}

                        <li className="page-item">
                            <a className="page-link" href="#" onClick={nextPage}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
