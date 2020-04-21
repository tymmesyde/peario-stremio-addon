const { DOMAIN } = process.env;
const { version, description } = require('../package.json');

module.exports = {
    id: 'community.peario',
    version,
    name: 'Peario',
    description,
    logo: `${DOMAIN}/public/icon.png`,
    background: `${DOMAIN}/public/background.png`,
    catalogs: [],
    resources: ['stream'],
    types: ['movie'],
    idPrefixes: ['tt']
};