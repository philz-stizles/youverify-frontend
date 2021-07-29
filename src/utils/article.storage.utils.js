const APPLICATION_STORE = 'youverifyNews'

export const saveArticleToStorage = (newArticle) => {
  // Retrieve application data from local storage
  const applicationStore = localStorage.getItem(APPLICATION_STORE)

  if (!applicationStore) {
    const feeds = []
    feeds.push(newArticle)
    const youverifyStore = {
      feeds,
    }

    localStorage.setItem(APPLICATION_STORE, JSON.stringify(youverifyStore))
  } else {
    const parsedStore = JSON.parse(localStorage.getItem(APPLICATION_STORE))
    if (!parsedStore.feeds.find((feed) => feed.title === newArticle.title)) {
      parsedStore.feeds.push(newArticle)
      localStorage.setItem(APPLICATION_STORE, JSON.stringify(parsedStore))
    }
  }
}

export const getArticlesFromStorage = () => {
  // Retrieve application data from local storage
  const applicationStore = localStorage.getItem(APPLICATION_STORE)

  if (!applicationStore) {
    return []
  } else {
    const parsedStore = JSON.parse(localStorage.getItem(APPLICATION_STORE))
    if (parsedStore) {
      return parsedStore.feeds
    } else {
      return []
    }
  }
}
