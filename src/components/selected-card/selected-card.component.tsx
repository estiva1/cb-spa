import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { IArticle } from "../../store/article/article.types";

import {
  Article,
  BackToHomepageContainer,
  BackToHomepageText,
  IconContainer,
  PreviewImage,
  SelectedCardContainer,
  SummaryText,
  TitleText,
} from "./selected-card.styles";

import { ReactComponent as LeftArrowIcon } from "../../assets/left-arrow-icon.svg";

type SelectedCardProps = {
  article: IArticle;
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
          <Article>
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
          </Article>
        </SelectedCardContainer>
      </div>
    </div>
  );
};

export default SelectedCard;
