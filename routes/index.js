const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')

// Env vars
const API_BASE_URL = process.env.API_BASE_URL_OPENWEATHERMAP
const API_KEY_NAME = process.env.API_KEY_NAME_OPENWEATHERMAP
const API_KEY_VALUE = process.env.API_KEY_VALUE_OPENWEATHERMAP

// Init cache
let cache = apicache.middleware

router.get('/', cache('1 miniutes'), async (req, res)=>{
    try {
        // console.log(url.parse(req.url, true).query);
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })
        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
        const data = apiRes.body

        if(process.env.NODE_ENV !== 'production'){
            console.log(`REQUEST: ${API_BASE_URL}?${params}`);
        }
    
        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({error})
    }

})

module.exports = router