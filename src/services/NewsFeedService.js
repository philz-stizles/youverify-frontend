import axios from 'axios'

class NewsFeedService {
  proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  baseUrl = process.env.VUE_APP_NEWS_API

  async getNewsFeedByCountry(country, category) {
    // const categoryQueryParam =
    //   category.trim() !== '' ? `&category=${category}` : ''
    // const url = `/api/v2/top-headlines?country=${country}${categoryQueryParam}`
    // const url = `${this.baseUrl}/top-headlines?country=${country}${categoryQueryParam}`
    console.log(process.env.VUE_APP_NEWS_API)

    const url = `${this.baseUrl}?country=${country}&category=${category}`
    try {
      const response = await axios.get(url)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default new NewsFeedService()
