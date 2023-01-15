import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Article } from "../../store/article/article.types";

import {
  BackToHomepageContainer,
  BackToHomepageText,
  IconContainer,
  PreviewImage,
  SelectedCardContainer,
  StyledArticle,
  SummaryText,
  TitleText,
} from "./selected-card.styles";

import { ReactComponent as LeftArrowIcon } from "../../assets/left-arrow-icon.svg";

type SelectedCardProps = {
  article: Article;
};

const SelectedCard: FC<SelectedCardProps> = ({ article }) => {
  const { imageUrl, title, summary } = article || {};
  const navigate = useNavigate();

  const onNavigateHandler = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <div>
        <PreviewImage imageUrl={imageUrl} />
      </div>
      <div>
        <SelectedCardContainer>
          <StyledArticle>
            <TitleText>{title}</TitleText>
            <SummaryText>{summary}</SummaryText>
            <BackToHomepageContainer>
              <IconContainer>
                <LeftArrowIcon />
              </IconContainer>
              <BackToHomepageText onClick={onNavigateHandler}>
                Back to homepage
              </BackToHomepageText>
            </BackToHomepageContainer>
          </StyledArticle>
        </SelectedCardContainer>
      </div>
    </div>
  );
};

export default SelectedCard;
