import styled from "styled-components";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

export const SearchForm = styled(Paper)`
  && {
    width: 600px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 40px;
    //position: absolute;
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 800px) {
      width: 350px;
    }
  }
`;

export const IconButtonContainer = styled(IconButton)`
  && {
    margin: 0;
    padding: 20px;
  }
`;
