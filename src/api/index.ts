import axios from 'axios'

export const baseUrl = process.env.REACT_APP_BASE_URL

const AppAPI = {
  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('jwtToken') || '',
        },
      },
    })
  },

  async loadInitialData() {
    return await AppAPI.init().get(baseUrl + '/data')
  },
}

export default AppAPI
