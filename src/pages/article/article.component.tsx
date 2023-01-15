import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchArticleStart } from "../../store/article/article.actions";

import SelectedCard from "../../components/selected-card/selected-card.component";

type ArticleParams = {
  id: string;
};

const Article: FC = () => {
  const { article } = useTypedSelector((state) => state.articleReducer);
  const { id } = useParams<ArticleParams>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleStart(id));
  }, []);

  return <SelectedCard article={article} />;
};

export default Article;
