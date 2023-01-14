import styled from "styled-components";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const SelectedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

type PreviewImageProps = {
  imageUrl: string;
};

export const PreviewImage = styled.div<PreviewImageProps>`
  && {
    position: absolute;
    width: 100%;
    height: 245px;
    left: 0px;
    top: 0px;
    background: #c4c4c4;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position: center;
    background-size: cover;
  }
`;

export const Article = styled(Paper).attrs({})`
  && {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 75px;
    padding: 35px 75px 50px; //top, sides, bottom
    top: 150px;
    gap: 50px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    @media screen and (max-width: 850px) {
      width: 70%;
    }
  }
`;

export const TitleText = styled(Typography).attrs({})`
  && {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    align-self: center;
    color: #363636;
  }
`;

export const SummaryText = styled(Typography).attrs({})`
  && {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000;
  }
`;

export const BackToHomepageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: -60px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const BackToHomepageText = styled(Typography).attrs({})`
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
    background-color: #5f5f5f;
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

export const IconContainer = styled.div`
  && {
    margin: 0;
  }
`;
