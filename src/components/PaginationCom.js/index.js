import React from 'react'
import "./pagination.css"
function PaginationComp({ totalPage, handleClick }) {
    console.log("totalPage", totalPage);
    const pages = [...Array(totalPage).keys()].map(num => num + 1);
    console.log("pages", pages);
    return (
        <div className="pagination-container">
            {
                pages?.map(num => (
                    <button
                        className="button-pagination"
                        key={num}
                        onClick={() => handleClick(num)}
                    >{num}</button>
                ))
            }
        </div>
    )
}

export default PaginationComp
