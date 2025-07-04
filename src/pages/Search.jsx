
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import {
    SearchContainer,
    StyledTextField,
    InputAdornmentStyle,
    ClearIconButton,
} from "./Search.styles";

function Search() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleClear = () => {
        setSearchQuery("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <SearchContainer>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <StyledTextField
                    variant="outlined"
                    placeholder="Movies, shows and more"
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
                                    <CloseIcon />
                                </ClearIconButton>
                            </InputAdornmentStyle>
                        ),
                    }}
                />
            </form>
        </SearchContainer>
    );
}

export default Search;
