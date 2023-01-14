import React, { FC } from "react";
import InputBase from "@mui/material/InputBase";

import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { IconButtonContainer, SearchForm } from "./searchbar.styles";

interface SearchbarProps {
  searchText: string;
  setSearchText: (event: string) => void;
}

const Searchbar: FC<SearchbarProps> = ({ searchText, setSearchText }) => {
  return (
    <SearchForm>
      <IconButtonContainer type="submit" aria-label="search">
        <SearchIcon />
      </IconButtonContainer>
      <InputBase
        sx={{ ml: 1, flex: 1, m: 0 }}
        placeholder="Search..."
        value={searchText}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
          setSearchText(event.target.value)
        }
      />
    </SearchForm>
  );
};

export default Searchbar;
