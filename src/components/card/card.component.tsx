import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { News } from "../../store/news/news.types";

import CardMedia from "@mui/material/CardMedia";

import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/right-arrow-icon.svg";

import {
  CardContainer,
  CardContentContainer,
  DateText,
  IconContainer,
  PublishedDateContainer,
  ReadMoreContainer,
  ReadMoreText,
  SummaryText,
  TitleText,
} from "./card.styles";

type CardProps = {
  news: News;
};

const Card: FC<CardProps> = ({ news }) => {
  const { imageUrl, publishedAt, title, summary } = news;
  const navigate = useNavigate();

  const onNavigateHandler = useCallback(() => {
    navigate(`article/${news.id}`);
  }, [navigate]);

  return (
    <CardContainer>
      <CardMedia component="img" height="217" image={imageUrl} />

      <CardContentContainer>
        <PublishedDateContainer>
          <IconContainer>
            <CalendarIcon />
          </IconContainer>
          <DateText>
            {new Date(publishedAt.split("T")[0]).toLocaleDateString()}
          </DateText>
        </PublishedDateContainer>

        <TitleText gutterBottom dangerouslySetInnerHTML={{ __html: title }} />
        <SummaryText
          gutterBottom
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <ReadMoreContainer>
          <ReadMoreText onClick={onNavigateHandler}>Read more</ReadMoreText>
          <IconContainer>
            <RightArrowIcon />
          </IconContainer>
        </ReadMoreContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
