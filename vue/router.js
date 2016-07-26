const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', (req, res) => {
    res.render('index',{
        title:'vue',
        message:'hello vue'
    })
})

router.get('/vue', (req, res) => {
    res.render('index',{
        title:'vue',
        message:'hello nima'
    })
})

module.exports = router
