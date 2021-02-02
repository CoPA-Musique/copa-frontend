import React, {useState, useEffect} from "react";
import PostCard from "./PostCard/PostCard";
import style from "./PaginatedPostsGrid.module.css";
import PaginatedContent from "../../molecules/PaginatedContent/PaginatedContent";
import PaginationBar from "../../molecules/PaginationBar/PaginationBar";

const PaginatedPostsGrid = ({posts}) => {
    const dataLimit = 6;
    const pageLimit = 2;

    const [pages] = useState(Math.round(posts.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({behavior: "smooth", top: "0px"});
    })

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return posts.slice(startIndex, endIndex);
    };


    return (
        <section>
            <div className={style.PaginatedPostsGrid}>
                <PaginatedContent data={posts} RenderComponent={PostCard} dataLimit={6}
                                  paginatedData={getPaginatedData}/>
            </div>
            <PaginationBar dataLength={posts.length} dataLimit={dataLimit} pageLimit={pageLimit} nextPage={goToNextPage}
                           previousPage={goToPreviousPage} changePage={changePage}
                           paginationGroup={getPaginationGroup} currentPage={currentPage} pages={pages}/>
        </section>
    );
};

export default PaginatedPostsGrid;
