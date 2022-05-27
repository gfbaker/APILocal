'use strict';

module.exports = (sequelize, DataTypes) => {
    const actor = sequelize.define('Actor', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        rating: DataTypes.DECIMAL
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    actor.associate = models => {

        actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie'
        })
    }
    return actor;
}