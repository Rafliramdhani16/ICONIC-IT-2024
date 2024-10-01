import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useSearch } from "../../../Hook/HookSearch";

const SearchBar = ({ isMobile = false }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const { performSearch, searchResults } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery) {
        performSearch(searchQuery);
        setIsResultsVisible(true);
      } else {
        performSearch("");
        setIsResultsVisible(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, performSearch]);

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsResultsVisible(false);
  };

  const handleResultClick = (uuid) => {
    navigate(`/materi/${uuid}`);
    setSearchQuery("");
    setIsResultsVisible(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center ${
          isMobile
            ? "w-full"
            : "w-full sm:w-[300px] lg:w-[400px] xl:w-[600px] my-4"
        }`}
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Temukan materi"
            className="w-full py-2 pl-10 pr-10 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 ease-in-out"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchQuery && (
            <AiOutlineClose
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-200"
              onClick={handleClearSearch}
            />
          )}
        </div>
      </div>

      <div
        className={`absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden max-h-60 overflow-y-auto transition-all duration-300 ease-in-out ${
          isResultsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {searchResults.length > 0 ? (
          <ul className="divide-y divide-gray-100">
            {searchResults.map((result) => (
              <li
                key={result.uuid}
                className="p-3 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-blue-50"
                onClick={() => handleResultClick(result.uuid)}
              >
                <p className="text-sm text-gray-800 font-medium">
                  {result.materi}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-3 text-sm text-gray-500">
            Materi yang Anda cari tidak ada
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
