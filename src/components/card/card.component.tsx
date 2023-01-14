import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { INews } from "../../store/news/news.types";

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

interface CardProps {
  news: INews;
}

const Card: FC<CardProps> = ({ news }) => {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <CardMedia component="img" height="217" image={news.imageUrl} />

      <CardContentContainer>
        <PublishedDateContainer>
          <IconContainer>
            <CalendarIcon />
          </IconContainer>
          <DateText>
            {new Date(news.publishedAt.split("T")[0]).toLocaleDateString()}
          </DateText>
        </PublishedDateContainer>

        <TitleText
          gutterBottom
          dangerouslySetInnerHTML={{ __html: news.title }}
        />
        <SummaryText
          gutterBottom
          dangerouslySetInnerHTML={{ __html: news.summary }}
        />

        <ReadMoreContainer>
          <ReadMoreText onClick={() => navigate(`article/${news.id}`)}>
            Read more
          </ReadMoreText>
          <IconContainer>
            <RightArrowIcon />
          </IconContainer>
        </ReadMoreContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
