import React, { useEffect, useState } from 'react'
import "./pagination.css"
function PaginationComp({ totalPage, handleClick, itemNo }) {

    const pages = [...Array(totalPage).keys()].map(num => num + 1);
    const classes = (num) => {
        if (num == itemNo) {
            return 'button-pagination-clicked'
        } else {
            return 'button-pagination-not-clicked'
        }
    }



    return (
        <div className="pagination-container">
            {
                pages?.map(num => (
                    <button

                        id={num}
                        className={`button-pagination ${classes(num)}`}
                        key={num}
                        onClick={() => handleClick(num)}
                    >{num}</button>
                ))
            }
        </div>
    )
}

export default PaginationComp
