import styled from "styled-components";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CardContainer = styled.div`
  width: 400px;
  height: 530px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const CardContentContainer = styled(CardContent)`
  && {
    padding: 25px;
  }
`;

export const PublishedDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;
`;

export const IconContainer = styled.div`
  && {
    margin: 0;
  }
`;

export const DateText = styled(Typography).attrs({})`
  && {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #363636;
  }
`;

export const TitleText = styled(Typography).attrs({
  fontSize: "24px",
  component: "div",
})`
  //standard Line Clampin’
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SummaryText = styled(Typography).attrs({})`
  && {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #363636;

    //standard Line Clampin’
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 25px;
  align-items: center;
  width: max-content;
  gap: 10px;
  cursor: pointer;
`;

export const ReadMoreText = styled(Typography).attrs({})`
  && {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #363636;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #5F5F5F;
  }
  &:before {
    opacity: 0;
    transform: translateY(-8px);
    transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY(8px/2);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      opacity 0.2s;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0.2s;
    }
    &:after {
      transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0s 0.2s;
    }
  }
`;