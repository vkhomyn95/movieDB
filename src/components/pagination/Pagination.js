import React from 'react';

export const Pagination = (props) => {
    const pageLinks = [];
    for (let i =1 ; i <= props.pages + 1; i++){
        let active = props.currentPage == i ? 'active' : '';
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a> </li>)
    }
    return (
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {pageLinks}
                    {/*<button onClick={() => props.nextPage(4)}>Next Page</button>*/}
                </ul>
            </div>
        </div>
    );
};
