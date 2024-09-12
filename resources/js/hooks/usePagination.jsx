import { useState } from "react";

const usePagination = (totalItems, itemsPerPage = 15) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = (items) =>
        items.slice(indexOfFirstItem, indexOfLastItem);

    return {
        currentPage,
        totalPages,
        paginate,
        currentItems,
    };
};

export default usePagination;
