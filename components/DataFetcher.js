import TLTSample from '../docs/TLT-Sample'



let DataFetcher = {}
DataFetcher.DOLJoblessClaimsFetcher = () => {
	fetch('http://api.dol.gov/V1/Statistics/OUI_InitialClaims',
	{
		method: 'GET',
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(function (response) {
		console.log(response)
	})
}


DataFetcher.BARFetcher = () => {
	// let quoteURL = 'https://marketdata.websol.barchart.com/getHistory.json?apikey=' +
	// process.env.BAR_API_KEY +
	// '&symbol=TLT&type=daily&startDate=20200608&endDate=20200912&order=asc'

	// fetch(quoteURL)
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));

	// For now, hardcoded
	return TLTSample
}

module.exports = DataFetcher