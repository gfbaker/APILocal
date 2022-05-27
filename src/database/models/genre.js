'use strict';

module.exports = (sequelize, DataTypes) => {
    const genre = sequelize.define('Genre', {
        name: DataTypes.STRING,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    genre.associate = models => {

        genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return genre;
} 