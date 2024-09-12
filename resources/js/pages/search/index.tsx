import React, { useState, useEffect } from "react";
import User from "../../models/User";
import SearchHeader from "./components/SearchHeader";
import SearchUser from "./components/SearchUser";
import SearchFilters from "./components/SearchFilters";
import Pagination from "../../components/Shared/Pagination";
import usePagination from "../../hooks/usePagination";

const SearchIndex = () => {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { currentPage, totalPages, paginate, currentItems } = usePagination(
        filteredUsers.length,
        15
    );

    const handleApplyFilter = async (filters: any) => {
        setIsLoading(true);

        const filtered = await User.filter(filters);
        setFilteredUsers(filtered);

        setIsLoading(false);
    };

    const fetchUsers = async () => {
        setIsLoading(true);

        const users = await User.all();
        setFilteredUsers(users);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="mb-10">
            <div className="md:max-w-[90vw] max-w-[100vw] mx-auto">
                <SearchHeader />
            </div>

            <div className="md:flex justify-between pt-0">
                <SearchFilters onApplyFilters={handleApplyFilter} />
                <div className="p-6 pt-0 sm:p-8 sm:pt-0 w-full space-y-10 mb-20 md:mb-6 md:w-3/4">
                    {isLoading && (
                        <p className="text-center capitalize text-lg font-medium">
                            loading...
                        </p>
                    )}
                    {!isLoading && filteredUsers.length === 0 && (
                        <p className="text-center capitalize text-lg font-medium">
                            user not found.
                        </p>
                    )}
                    {!isLoading && filteredUsers.length > 0 && (
                        <>
                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
                                {currentItems(filteredUsers).map((user) => (
                                    <SearchUser key={user.id} user={user} />
                                ))}
                            </div>
                        </>
                    )}

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        paginate={paginate}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchIndex;
