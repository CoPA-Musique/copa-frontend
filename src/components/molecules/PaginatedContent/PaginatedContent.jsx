import React from "react";

const PaginatedContent = ({RenderComponent, paginatedData}) => {
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
