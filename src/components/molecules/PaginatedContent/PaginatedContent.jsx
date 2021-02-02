import React, {useState} from "react";
import style from "../PaginationBar/PaginationBar.module.css";

const PaginatedContent = ({data, RenderComponent, paginatedData}) => {
    return (
        <>
            {/* show the data */}
                {paginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d}/>
                ))}
        </>
    )
};

export default PaginatedContent;
