import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import SelectedCard from "../../components/selected-card/selected-card.component";

import { fetchArticleStart } from "../../store/article/article.actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type ArticleParams = {
    id: string;
}

const Article: FC = () => {
    const { article } = useTypedSelector (state => state.articleReducer)
    const { id } = useParams<ArticleParams>()
    const dispatch = useDispatch()

    useEffect(() => {   
        dispatch(fetchArticleStart(id))
    }, [])

    return (
        <SelectedCard article={article} />
    )
}

export default Article