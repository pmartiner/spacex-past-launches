type PageParams = {
  params: {
    page: string;
  }
}

const generatePages = (numPages: number) => {
  let i = 1;
  const pagesData: PageParams[] = [];

  while (i <= numPages) {
    pagesData.push({
      params: {
        page: `${i}`
      }
    })

    ++i;
  }

  return pagesData;
}

export default generatePages;
