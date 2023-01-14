import { useMemo } from "react";

export const useNews = (searchText: string, news: any[]) => {
  return useMemo(() => {
    const searchTextArray = searchText.match(/\b(\w+)\b/g);

    const regexFromTextArray = searchTextArray
      ? new RegExp(searchTextArray.join("|"), "gi")
      : /(?:)/;

    const foundNews = searchTextArray
      ? news.filter(
          (item) =>
            item.title.match(regexFromTextArray) ||
            item.summary.match(regexFromTextArray)
        )
      : news;

    const mutedArray = searchTextArray
      ? foundNews.filter((item) => {
          item.titleCoincidences = 0;
          item.summaryCoincidences = 0;

          if (!!item.title.match(regexFromTextArray))
            item.titleCoincidences +=
              item.title.match(regexFromTextArray).length;
          if (!!item.summary.match(regexFromTextArray))
            item.summaryCoincidences +=
              item.summary.match(regexFromTextArray).length;

          return item;
        })
      : foundNews;

    const sortedNews = mutedArray.sort(
      (a, b) =>
        b.titleCoincidences - a.titleCoincidences ||
        b.summaryCoincidences - a.summaryCoincidences
    );

    const highlitedNews = sortedNews.map((item) => {
      const newTitle = item.title.replace(
        regexFromTextArray,
        (match: any) => `<mark style="backgroundColor: yellow">${match}</mark>`
      );

      const newSummary = item.summary.replace(
        regexFromTextArray,
        (match: any) => `<mark style="backgroundColor: yellow">${match}</mark>`
      );

      return {
        ...item,
        title: newTitle ? newTitle : item.title,
        summary: newSummary ? newSummary : item.summary,
      };
    });

    return highlitedNews;
  }, [searchText, news]);
};
