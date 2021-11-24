const uuid = require('uuid')
const path = require('path');
const { Game, GameInfo } = require('../models/models');
const { nextTick } = require('process');
const ApiError = require('../error/ApiError')

class GameController {
    async create(req, res, next) {
        try {
            const { name, price, typeId, genreId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    GameInfo.create({
                        title: i.title,
                        description: i.description,
                        gameId: game.id
                    })
                    )
            }

            const game = await Game.create({ name, price, typeId, genreId, img: fileName })

            return res.json(game)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
       
    }

    async getAll(req, res) {
        const {typeId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 9 
        let offset = page * limit - limit
        let games;
        if (!typeId && !genreId){
            games = await Game.findAndCountAll({limit, offset})
        }
        if (typeId && !genreId){
            games = await Game.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (!typeId && genreId){
            games = await Game.findAndCountAll({where:{genreId}, limit, offset})
        }
        if (typeId && genreId){
            games = await Game.findAndCountAll({where:{genreId, typeId}, limit, offset})
        }
        return res.json(games)
    }
    async getOne(req, res) {
        const {id} = req.params
        const game = await Game.findOne(
            {
                where: {id},
                include: [{model: GameInfo, as: 'info'}]
            },
        )
        return res.json(game)
    }
}


module.exports = new GameController()