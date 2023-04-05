const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/:name', (req, res) => {
//   res.send('Hello World!' + req.params.name)
// })

app.get('/navbar', (req,res) => {
  // res.send('About page')
  res.sendFile(path.join(__dirname,'navbar.html'));
})

app.get('/clubbenefits', (req,res) => {
  // res.send('About page')
  res.sendFile(path.join(__dirname,'Pages/ClubBenefits.html'));
})

app.get('/clubfacilities', (req,res) => {
  // res.send('About page')
  res.sendFile(path.join(__dirname,'Pages/ClubFacilities.html'));
})

app.get('/clubmembership', (req,res) => {
  // res.send('About page')
  res.sendFile(path.join(__dirname,'Pages/ClubMembership.html'));
})

app.get('/about', (req,res) => {
   res.send('About page')
})

app.get('/contact', (req,res)=>{
  res.send('Contact page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
