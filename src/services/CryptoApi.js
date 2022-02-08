import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': ''
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi' , 
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: buildCreateApi.builder.query({
			query: () => 
		})
	})
});

// var options = {
// 	method: 'GET',
// 	url: 'https://coinranking1.p.rapidapi.com/coins',
// 	params: {
// 	  referenceCurrencyUuid: '',
// 	  timePeriod: '24h',
// 	  tiers: '1',
// 	  orderBy: 'marketCap',
// 	  orderDirection: 'desc',
// 	  limit: '50',
// 	  offset: '0'
// 	},
// 	headers: {
// 	  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
// 	  'x-rapidapi-key': ''
// 	}
//   };