import { FC, Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useNews } from "../../hooks/useNews";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchNewsStart } from "../../store/news/news.actions";

import Divider from "@mui/material/Divider";
import Spinner from "../../components/spinner/spinner.component";
import Search from "../../components/searchbar/searchbar.component";
import Card from "../../components/card/card.component";
import { HintText, HomeContainer, NewsContainer } from "./home.styles";

const Home: FC = () => {
  const { news, isFetching } = useTypedSelector((state) => state.newsReducer);

  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsStart());
  }, []);

  const filteredNews = useNews(searchText, news);

  if (isFetching) return <Spinner />;

  return (
    <Fragment>
      <HomeContainer>
        <HintText>Filter by keywords</HintText>
        <Search searchText={searchText} setSearchText={setSearchText} />

        <div style={{ width: "100%" }}>
          <HintText mb="5px">
            {filteredNews.length > 1 ? "Results" : "Result"}:{" "}
            {filteredNews.length}
          </HintText>

          <Divider sx={{ width: "100%", mb: "45px" }} />
        </div>
        <NewsContainer>
          {filteredNews.map((item) => (
            <Card key={item.id} news={item} />
          ))}
        </NewsContainer>
      </HomeContainer>
    </Fragment>
  );
};

export default Home;
