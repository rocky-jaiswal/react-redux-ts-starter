import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from './'

// Define a service using a base URL and expected endpoints
const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export default pokemonApi
