import React, {useState, useEffect} from "react";
import PostCard from "./PostCard/PostCard";
import style from "./PaginatedPostsGrid.module.css";
import PaginatedContent from "../../molecules/PaginatedContent/PaginatedContent";
import PaginationBar from "../../molecules/PaginationBar/PaginationBar";
import usePagination from "../../../hooks/usePagination";

const PaginatedPostsGrid = ({posts}) => {
    const dataLimit = 6;
    const pageLimit = Math.round(posts.length / dataLimit) + 1;

    const [getPaginatedData, goToNextPage, goToPreviousPage, changePage, currentPage, getPaginationGroup, pages] = usePagination(posts, dataLimit, pageLimit);

    return (
        <section>
            <div className={style.PaginatedPostsGrid}>
                <PaginatedContent data={posts} RenderComponent={PostCard} dataLimit={dataLimit}
                                  paginatedData={getPaginatedData}/>
            </div>
            <PaginationBar dataLength={posts.length} dataLimit={dataLimit} pageLimit={pageLimit} nextPage={goToNextPage}
                           previousPage={goToPreviousPage} changePage={changePage}
                           paginationGroup={getPaginationGroup} currentPage={currentPage} pages={pages}/>
        </section>
    );
};

export default PaginatedPostsGrid;
