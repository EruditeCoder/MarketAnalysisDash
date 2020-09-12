function DOLJoblessClaimsFetcher() {
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


function BARDXYFetcher() {
    // let quoteURL = 'https://marketdata.websol.barchart.com/getHistory.json?apikey=' + process.env.BAR_API_KEY + '&symbol=TLT&type=daily&startDate=20200608&endDate=20200912&order=asc'

    // fetch(quoteURL)
    // .then(function (response) {
    //     console.log(response)
    // })

    console.log("BAR API KEY:")
    console.log(process.env.BAR_API_KEY)
    console.log("BLS API KEY:")
    console.log(process.env.BLS_API_KEY)
}

BARDXYFetcher()