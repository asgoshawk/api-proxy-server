const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

// Enable cors
app.use(cors())

// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
})
app.use(limiter)
app.set('trust proxy', 1)

// Routes
app.use('/api', require('./routes'))

app.listen(PORT, ()=> console.log(`Server is runing on port ${PORT}`))

