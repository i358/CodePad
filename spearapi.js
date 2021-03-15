const request = require('request')
const api_key = "YOUR API KEY IS HERE"
var uri = `https://spearapi.cf/api/${api_key}`

request(uri+"/{bot_id}/info", (response, body, err)=>{
    if(err) throw new Error(err)
    console.log(JSON.parse(res))
})
