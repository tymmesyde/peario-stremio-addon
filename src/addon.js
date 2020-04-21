const { PEARIO_URL, PEARIO_STREAM_URL } = process.env;
const { addonBuilder } = require('stremio-addon-sdk');
const manifest = require('./manifest');
const builder = new addonBuilder(manifest);

builder.defineStreamHandler(({ type, id }) => {
	console.log(`Streams: ${type} ${id}`);

	let streams = [];
	if (type === 'movie') streams = [{ 
		title: `👥 Watch with your friends\n🔗 ${PEARIO_URL}`,
		externalUrl: `${PEARIO_URL}${PEARIO_STREAM_URL}/movie/${id}`
	}];

	return Promise.resolve({ streams });
});

module.exports = builder.getInterface();