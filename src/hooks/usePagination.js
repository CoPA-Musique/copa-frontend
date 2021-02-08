import {useEffect, useState} from "react";

const usePagination = (data, dataLimit, pageLimit) => {
    const pages = Math.round(data.length / dataLimit) + 1;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
            window.scrollTo({behavior: "smooth", top: "0px"});
        }
    )

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    };

    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    console.log(currentPage, pages)

    return [getPaginatedData, goToNextPage, goToPreviousPage, changePage, currentPage, getPaginationGroup, pages];
}

export default usePagination;
