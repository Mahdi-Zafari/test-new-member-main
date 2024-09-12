import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
}

interface ButtonProps {
    onClick?: () => void;
    variant: "default" | "outline";
    children: any;
}

const Pagination = ({ currentPage, totalPages, paginate }: PaginationProps) => {
    const getDisplayedPageNumbers = () => {
        const totalNumbers = 7;
        const sideNumbers = 2;
        const pages: (number | string)[] = [];

        if (totalPages <= totalNumbers) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= sideNumbers + 3) {
            pages.push(
                ...Array.from({ length: sideNumbers + 3 }, (_, i) => i + 1),
                "...",
                totalPages
            );
        } else if (currentPage >= totalPages - sideNumbers - 2) {
            pages.push(
                1,
                "...",
                ...Array.from(
                    { length: sideNumbers + 3 },
                    (_, i) => totalPages - sideNumbers - 2 + i
                )
            );
        } else {
            pages.push(
                1,
                "...",
                ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i),
                "...",
                totalPages
            );
        }

        return pages;
    };

    const handleDotsClick = (position: string) => {
        if (position === "left") {
            paginate(Math.max(currentPage - 5, 1));
        } else {
            paginate(Math.min(currentPage + 5, totalPages));
        }
    };

    const displayedPages = getDisplayedPageNumbers();

    if (totalPages < 2) {
        return null;
    }

    return (
        <nav className="flex justify-center mt-4">
            <ul className="flex space-x-3 md:space-x-5 justify-center items-center">
                {displayedPages.map((number, index) => (
                    <li key={index}>
                        {number === "..." ? (
                            <Button
                                onClick={() =>
                                    handleDotsClick(
                                        index === 1 ? "left" : "right"
                                    )
                                }
                                variant="outline"
                            >
                                ...
                            </Button>
                        ) : (
                            <Button
                                onClick={() => paginate(number as number)}
                                variant={
                                    currentPage === number
                                        ? "default"
                                        : "outline"
                                }
                            >
                                {number}
                            </Button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const Button = ({ onClick, variant, children }: ButtonProps) => {
    const baseStyles = "rounded size-8 md:size-10";
    const defaultStyles = "bg-[#e72a7f] text-white";
    const outlineStyles = "bg-gray-200 text-black";

    const styles = variant === "default" ? defaultStyles : outlineStyles;

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${styles}`}
            disabled={!onClick}
        >
            {children}
        </button>
    );
};

export default Pagination;
