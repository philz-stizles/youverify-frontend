import axios from 'axios'

class GoogleService {
  async getAddressFromLocation(lat, lng) {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=country&key=${process.env.VUE_APP_GOOGLE_API_KEY}`
      )

      return response.data.results
    } catch (error) {
      console.log(error)
    }
  }

  extractShortName(address) {
    return address[0].address_components[0].short_name.toLowerCase()
  }
}

export default new GoogleService()
