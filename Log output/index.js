const express = require('express')
const app = express()
const port = process.env.PORT || 3000



// const getHashNow = () => {
  
//     console.log(new Date(), randomHash)
  
//     setTimeout(getHashNow, 5000)
// }
  
// getHashNow()

app.get('/', (req, res) => {
    const randomHash = Math.random().toString(36).substring(2,30)
    const timestamp =  new Date()
    res.send(`<h1>Timestamp: ${timestamp}</h1>
            <h2>Random hash: ${randomHash}</h2>`)
})

app.listen(port, () => {
    console.log(`Server started in port ${port}`)
  })