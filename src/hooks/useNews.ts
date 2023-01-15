export const useNews = (searchText: string, news: any[]) => {
  const searchTextArray = searchText.match(/\b(\w+)\b/g);

  const regexFromTextArray = searchTextArray
    ? new RegExp(searchTextArray.join("|"), "gi")
    : /(?:)/;

  //checking if string in input matches some text in titles and summaries
  //if yes, returning new foundNews array with such cards
  //if no, displaying fetched cards
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

        if (item.title.match(regexFromTextArray))
          item.titleCoincidences += item.title.match(regexFromTextArray).length;
        if (item.summary.match(regexFromTextArray))
          item.summaryCoincidences +=
            item.summary.match(regexFromTextArray).length;

        //console.log(item);
        return item;
      })
    : foundNews;

  //displaying by priority of fields: 1-Title, 2-Summary
  const sortedNews = mutedArray.sort(
    (a, b) =>
      b.titleCoincidences - a.titleCoincidences ||
      b.summaryCoincidences - a.summaryCoincidences
  );

  //highlighting founded text
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
};
