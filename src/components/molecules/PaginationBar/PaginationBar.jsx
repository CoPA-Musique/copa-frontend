import React, {useState} from "react";
import style from "./PaginationBar.module.css";

const PaginationBar = ({paginationGroup, changePage, nextPage, previousPage, currentPage, pages}) => {
    return (
        <>
            {/* show the pagination
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
            <div className={style.pagination}>
                {/* previous button */}
                <button
                    onClick={previousPage}
                    className={`${style.prev} ${currentPage === 1 ? style.disabled : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {paginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`${style.paginationItem} ${currentPage === item ? style.active : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={nextPage}
                    className={`${style.next} ${currentPage === pages ? style.disabled : ''}`}
                >
                    next
                </button>
            </div>
        </>
    )
};

export default PaginationBar;
