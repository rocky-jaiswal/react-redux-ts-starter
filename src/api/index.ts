import axios from 'axios'

import Config from '../config'

const AppAPI = {
  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('jwtToken') || ''
        }
      }
    })
  },

  async loadInitialData() {
    return await AppAPI.init().get(Config.env.baseURL + '/data')
  }
}

export default AppAPI
