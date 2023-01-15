import styled from "styled-components";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  padding: 50px 75px;

  @media screen and (max-width: 1300px) {
    padding: 30px 50px;
    width: max-content;
  }
  @media screen and (max-width: 850px) {
    padding: 20px;
    width: max-content;
  }
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 45px;
  place-items: center;
  margin: 0 auto;
  padding: 0;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const HintText = styled(Typography).attrs({
  component: "div",
})`
  && {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #363636;
  }

  @media screen and (max-width: 850px) {
    && {
      font-size: 12px;
    }
  }
`;

export const StyledDivider = styled(Divider).attrs({})`
  && {
    width: 100%;
    margin-bottom: 45px;
  }

  @media screen and (max-width: 850px) {
    && {
      margin-bottom: 30px;
    }
  }
`;
