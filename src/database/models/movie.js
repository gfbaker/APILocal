'use strict';

module.exports = (sequelize, DataTypes) => {
const movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    awards: DataTypes.NUMBER,
    release_date: DataTypes.DATE,
    length: DataTypes.NUMBER
},{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

movie.associate = models => {

    movie.belongsTo(models.Genre, {
        as: 'genre',
        foreignKey: 'genre_id'
    }),

    movie.belongsToMany(models.Actor, {
    as: 'actors',
    through: 'actor_movie'
    })
}

    return movie;


} 