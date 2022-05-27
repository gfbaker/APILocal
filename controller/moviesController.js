const { response } = require("express");
const DB = require("../src/database/models");
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Movie
        .findAll()
        .then(movies => {
            return res.status(200).json(
                {
                    total: movies.length,
                    data: movies,
                    status: 200
                }
            )
        })
    },

    show: (req, res) => {
        DB.Movie
        .findByPk(req.params.id)
        .then(movie => {
            return res.status(200).json(
                {
                    data: movie,
                    status: 200
                }
            )
        })
    },

    store: (req, res) => {
        DB.Movie
        .create(req.body)
        .then(movie => {
            return res.status(200).json(
                {
                    created: 'ok',
                    data: movie,
                    status: 200
                }
            )
        })
    },

    delete: (req, res) => {
        DB.Movie
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response);
        })
    },

    search: (req, res) => {
        DB.Movie
        .findAll({
            where: {
                title: {[Op.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(movies => {

            if(movies.length > 0) {
            return res.status(200).json(movies);
                } else {
                    return res.status(200).json('No en contramos ninguna pelicula :(')
                    }
        })
    }
}