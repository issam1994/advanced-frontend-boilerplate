# Gulp with TailwindCSS and some other libs

## Usage

1. Install Dev Depedencies
```sh
npm install // or yarn install
```
2. To start development and server for live preview
```sh
npm run dev // or yarn dev
```
3. To generate minifed files for production server
```sh
npm run prod // or yarn prod
```

# Configuration


To change the path of files and destination/build folder, edit options in **config.js** file
```sh
{
  config: {
      ...
      port: 9050 // browser preview port
  },
  paths: {
     root: "./",
     src: {
        base: "./src",
        css: "./src/css",
        js: "./src/js",
        img: "./src/images"
     },
     dist: {
         base: "./dist",
         css: "./dist/css",
         js: "./dist/js",
         img: "./dist/images"
     },
     build: {
         base: "./build",
         css: "./build/css",
         js: "./build/js",
         img: "./build/images"
     }
  }
  ...
}
```
