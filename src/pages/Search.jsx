
import React, { useState, lazy, Suspense } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import {
    SearchContainer,
    StyledTextField,
    InputAdornmentStyle,
    ClearIconButton,
} from "./Search.styles";

const MediaSlider = lazy(() => import("../component/MediaSlider"));

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleClear = () => {
        setSearchQuery("");
        setSearchResults([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/multi`,
                {
                    params: {
                        api_key: import.meta.env.VITE_TMDB_API_KEY,
                        query: searchQuery,
                        language: "en-US",
                        include_adult: false,
                    },
                }
            );

            const filtered = response.data.results.filter(
                (item) =>
                    (item.media_type === "movie" || item.media_type === "tv") &&
                    item.poster_path
            );

            setSearchResults(filtered);
        } catch (error) {
            console.error("Search error:", error);
        }
    };

    return (
        <>
            <SearchContainer>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <StyledTextField
                        variant="outlined"
                        placeholder="Search Movies, Shows and More"
                        fullWidth
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornmentStyle position="start">
                                    <SearchIcon />
                                </InputAdornmentStyle>
                            ),
                            endAdornment: searchQuery && (
                                <InputAdornmentStyle position="end">
                                    <ClearIconButton
                                        aria-label="clear"
                                        onClick={handleClear}
                                        edge="end"
                                    >
                                        <CloseIcon fontSize="medium" />
                                    </ClearIconButton>
                                </InputAdornmentStyle>
                            ),
                        }}
                    />
                </form>
            </SearchContainer>

            <Suspense fallback={<div style={{ color: "#fff", textAlign: "center" }}>Loading results...</div>}>
                {searchResults.length > 0 && (
                    <MediaSlider
                        title={`Search Results for "${searchQuery}"`}
                        items={searchResults}
                    />
                )}
            </Suspense>
        </>
    );
}

export default Search;
