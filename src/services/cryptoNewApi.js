import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'VoLZLbCG5dmshyHWWtDL2KeuccH0p1BZCynjsnuMcnspo3tkKg'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

  export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi' , 
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&sageSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
		})
	})
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;