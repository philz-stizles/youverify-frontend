import axios from 'axios'

class NewsFeedService {
  proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  baseUrl = process.env.VUE_APP_NEWS_API

  async getNewsFeedByCountry(country, category) {
    const categoryQueryParam =
      category.trim() !== '' ? `&category=${category}` : ''
    const url = `/api/v2/top-headlines?country=${country}${categoryQueryParam}`
    // const url = `${this.baseUrl}/top-headlines?country=${country}${categoryQueryParam}`

    try {
      const response = await axios.get(url, {
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          Authorization: process.env.VUE_APP_NEWS_API_key,
        },
      })

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default new NewsFeedService()
