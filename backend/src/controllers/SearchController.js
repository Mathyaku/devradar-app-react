const Dev = require("../models/Dev");

const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const { techs, latitude, longitude } = request.query;
        console.log(request.query);

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, // 10km
                },
            }
        })

        return response.json(devs);
    },
}