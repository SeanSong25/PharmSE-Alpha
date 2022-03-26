const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const server = express()
server.use(express.json());
server.use(cors({
    origin:"*"
}))
server.use(morgan('short'))
server.use(bodyParser.urlencoded({extended:false}))

const authRouter = require('./controllers/auth.js')
server.use(authRouter)

const inquiriesRouter = require('./controllers/inquiries.js')
server.use(inquiriesRouter)

const PORT = process.env.PORT || 3003
server.listen(PORT, ()=>{
    console.log("Server is up and listening on 3003")
})

const connectDB = require('dbConnect.js')
server.use(connectDB)
