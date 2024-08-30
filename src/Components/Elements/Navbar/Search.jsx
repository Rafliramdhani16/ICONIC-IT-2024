import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useSearch } from "../../../Hook/HookSearch";

const SearchBar = ({ isMobile = false }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { performSearch, searchResults, isLoading, error } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery) {
        performSearch(searchQuery);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, performSearch]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleResultClick = (uuid) => {
    navigate(`/materi/${uuid}`);
    setSearchQuery("");
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center ${
          isMobile ? "w-full " : "w-[300px] xl:w-[600px] lg:w-[400px]"
        }`}
      >
        <AiOutlineSearch className="absolute left-3 text-neutral-500" />
        <input
          type="text"
          placeholder="Temukan materi"
          className="w-full p-2 pl-10 pr-10 rounded-lg bg-neutral-200 focus:outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <AiOutlineClose
            className="absolute right-3 text-neutral-500 cursor-pointer"
            onClick={handleClearSearch}
          />
        )}
      </div>

      <div className="absolute mt-2 w-full bg-white border-gray-200 rounded-lg shadow-lg z-10">
        {isLoading && <p className="mt-2">Memuat...</p>}
        {error && <p className="mt-2 text-red-500">Kesalahan: {error}</p>}
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li
                key={result.uuid}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleResultClick(result.uuid)}
              >
                {result.materi}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
