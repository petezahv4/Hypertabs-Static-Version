self.__uv$config = {
	prefix: '/uv/service/',
	bare: `https://science.petezahgames.com`,
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: '/uv/uv.handler.js',
	bundle: '/uv/uv.bundle.js',
	config: '/uv/uv.config.js',
	sw: '/uv/uv.sw.js',
};
