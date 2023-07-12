const express = require('express');
const router = express.Router();


router.get('/',(req, res) => {
    // res.send('<h1>HELLO!!</h1>')
    res.sendFile(__dirname + '/pages/home.html')
})
 
router.get('/service',(req, res) => {
    //res.send('<h1>HELLO!! Service section</h1>')
    res.sendFile(__dirname + '/pages/service.html')
})

router.get('/contact',(req, res) => {
    //res.send('<h1>HELLO!! Contact section</h1>')
    res.sendFile(__dirname + '/pages/contact.html')
})

router.get('*',(req, res) => {
    res.send('<h1>404 NOT FOUND</h1>')
})

module.exports = router;