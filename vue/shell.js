'use strict'
const express = require('express')
const router = express.Router()
const _ = require('underscore')
let pageConfig = {};
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  pageConfig.commonTag = 'vue'
  next()
});

router.get('/:tag', (req, res) => {
    console.log(req.params.tag);
    res.render('index',_.extend(pageConfig,{
        title:'vue',
        message:'aaa'
    }))
})

// router.get('/vue', (req, res) => {
//     res.render('index',{
//         title:'vue',
//         message:'hello nima'
//     })
// })

module.exports = router
