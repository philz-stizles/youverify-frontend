import { createStore } from 'vuex'
// import NewsAPI from 'newsapi'
import GoogleService from '../services/GoogleService'
import NewsFeedService from '../services/NewsFeedService'
import {
  getArticlesFromStorage,
  saveArticleToStorage,
} from '@/utils/article.storage.utils'

// console.log(process.env.VUE_APP_NEWS_API_key)

// const newsapi = new NewsAPI(process.env.VUE_APP_NEWS_API_key, {
//   corsProxyUrl: 'https://cors-anywhere.herokuapp.com/',
// })

export default createStore({
  state: {
    userArticles: [],
    loadingArticles: false,
    selectedCategory: '',
    articles: [],
  },
  mutations: {
    loadNewsFeed(state, articles) {
      state.articles = articles
    },
    loadUserArticles(state, userArticles) {
      state.userArticles = userArticles
    },
    saveArticle(state, newArticle) {
      const userArticles = state.userArticles
      if (!userArticles.find((article) => article.title === newArticle.title)) {
        state.userArticles.push(newArticle)
        saveArticleToStorage(newArticle)
      }
    },
    setCategory(state, selectedCategory) {
      state.selectedCategory = selectedCategory
    },
  },
  actions: {
    async fetchNews({ commit, state }) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const geoAddress = await GoogleService.getAddressFromLocation(
              position.coords.latitude,
              position.coords.longitude
            )
            const shortName = GoogleService.extractShortName(geoAddress)
            console.log(shortName)
            const newsFeeds = await NewsFeedService.getNewsFeedByCountry(
              shortName,
              state.selectedCategory
            )

            commit('loadNewsFeed', newsFeeds.articles)
          },
          (error) => {
            console.log(error.message)
          }
        )
      } else {
        console.log('download news feed without location')
      }
    },
    loadUserArticles({ commit }) {
      commit('loadUserArticles', getArticlesFromStorage())
    },
  },
  getters: {
    articles: (state) => {
      return state.articles
    },
    userArticles: (state) => {
      return state.userArticles
    },
    userArticlesCount: (state) => {
      return state.userArticles.length
    },
    selectedCategory: (state) => {
      return state.selectedCategory
    },
  },
  modules: {},
})
