const {Router} = require('express')
const router = Router()

const {upload} = require('../controllers/uploadController')


router.route('/')
    .post(upload)
    //.post()

// router.route('/:id')
//     .get(getIngredient)
//     .put(updateIngredient)
//     .delete(deleteIngredient)

module.exports = router; 
