
const express = require('express')
const cors = require('cors')
const scrapeProduct = require('./scrapers.js')
const scrapeProductSecond = require('./meciuri&ids.js')

const port = 8081
const app = express()
app.use(cors())
// app.use(express.urlencoded({
//   extended: true,
// }))
app.use(express.json())

app.post('/puppeteer', async (req, res) => {
    const cote = await scrapeProduct(req.body.url)
    /* const {echipeAcasa} = await scrapeProductSecond()
    const {echipeDeplasare} = await scrapeProductSecond()
    const {theIds} = await scrapeProductSecond() */
    console.log(cote);
    res.status(201).send(cote)
    /* echipeAcasa, echipeDeplasare, theIds
echipeAcasa, echipeDeplasare, theIds */
    
})

app.get('/gettingdata', async(req, res) =>{
    const {echipeAcasa} = await scrapeProductSecond()
    const {echipeDeplasare} = await scrapeProductSecond()
    const {theIds} = await scrapeProductSecond() 
    console.log(typeof echipeAcasa, typeof echipeDeplasare, typeof theIds);
    console.log( echipeAcasa,  echipeDeplasare,  theIds);
    res.status(201).send([echipeAcasa, echipeDeplasare, theIds])
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
}) 