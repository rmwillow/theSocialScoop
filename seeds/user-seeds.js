const sequelize = require('../config/connection');
const { User } = require('../models');

const userInfo = [
    {
        username: 'daniel1234',
        email: 'daniel@aol.com',
        password: 'pass1234'
    },
    {
        username: 'rachel1234',
        email: 'rachel@aol.com',
        password: 'pass1234'
    },
    {
        username: 'meghan1234',
        email: 'meghan@aol.com',
        password: 'pass1234'
    },
    {
        username: 'bleakney1234',
        email: 'bleakney@aol.com',
        password: 'pass1234'
    },
    {
        username: 'bob1234',
        email: 'bob@aol.com',
        password: 'pass1234'
    },
    {
        username: 'milo1234',
        email: 'milo@aol.com',
        password: 'pass1234'
    },
];

const seedUsers = () => User.bulkCreate(userInfo, { individualHooks: true });
module.exports = seedUsers;