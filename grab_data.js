const fs = require('fs');
var axios = require("axios").default;
var json = require('./product_hunt_app/download.json');
var data = json.data.items.slice(0,5);

var covalentLoaded = true;

// Get Covalent Data
if (covalentLoaded == false){
    var covalentOptions = {
        method: 'GET',
        url: 'https://api.covalenthq.com/v1/1/nft_market/',
        params: {key: 'ckey_c2d8d88841e8485e9d5a94699c1'},
      };

      axios.request(covalentOptions).then(function (response) {
        let stringData = JSON.stringify(data);
        fs.writeFileSync('./product_hunt_app/download.json', stringData);
      })
}

// Enrich Covalent Data with NFTPORT Data
data.forEach((e, idx) => {
    var element = json.data.items[idx];

    console.log(element);

    var options = {
        method: 'GET',
        url: 'https://api.nftport.xyz/v0/search',
        params: {text: element.collection_name, chain: 'ethereum', page_number: '1', order_by: 'relevance'},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'f84888e5-5943-4f33-8537-ff54c8201f62'
        }
      };

      axios.request(options).then(function (response) {
          console.log("AXIOS RESPONSE");
        console.log(response.data);
        if (response.data.search_results != null && response.data.search_results.length != 0){
            console.log("WE IN THIS")
            element.pizza = true;
            element.img = response.data.search_results[0].cached_file_url 
            element.description = response.data.search_results[0].description
            element.token_id = response.data.search_results[0].token_id;
            // now make a request for another data thing
            var uniquenessOptions = {
                method: 'POST',
                url: 'https://api.nftport.xyz/v0/duplicates/tokens',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'f84888e5-5943-4f33-8537-ff54c8201f62'
                },
                data: {
                  chain: 'ethereum',
                  contract_address: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
                  token_id: response.data.search_results[0].token_id,
                  page_number: 1,
                  page_size: 50,
                  threshold: 0.75
                }
              };

              axios.request(uniquenessOptions).then(function (response) {
                console.log(response.data);
                if (response.data.is_similar == true){
                    element.is_unique = false;
                } else {
                    element.is_unique = true
                }

                if (idx == data.length - 1){
                    let stringData = JSON.stringify(data);
                    fs.writeFileSync('student-2.json', stringData);
                  }
              })
        }


        
      }).catch(function (error) {
        console.error(error);
      });
});




//./product_hunt_app/download.json

