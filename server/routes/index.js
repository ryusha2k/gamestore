const Router = require('express')
const router = new Router()
const gameRouter = require('./gameRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const genreRouter = require('./genreRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/genre', genreRouter)
router.use('/game', gameRouter)

module.exports = router