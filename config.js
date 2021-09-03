module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/css",
			js: "./src/js",
			img: "./src/images",
			fonts: "./src/fonts"
		},
		dist: {
			base: "./dist",
			css: "./dist/css",
			js: "./dist/js",
			img: "./dist/images",
			fonts: "./dist/fonts"
		},
		build: {
			base: "./build",
			css: "./build/css",
			js: "./build/js",
			img: "./build/images",
			fonts: "./build/fonts"
		}
	}
}