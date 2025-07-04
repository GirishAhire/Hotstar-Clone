// src/components/Search.jsx
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContainer, StyledTextField, InputAdornmentStyle } from "./Search.styles";

function Search() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <SearchContainer>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                    }}
                />
            </form>
        </SearchContainer>
    );
}

export default Search;
