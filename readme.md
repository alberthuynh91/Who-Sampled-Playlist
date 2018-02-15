# Who Sampled Playlist (Application using Spotify API)

Have you ever wondered where your favorite hip hop artist sample their music from? Would you like to create an entire playlist of songs sampled by your favorite artists? The Who Sampled Playlist application allows you to do this all in your web browser. 

DEMO: coming soon...

## Backlog
- New search should wipe current search. Your playlist should still be in tact.
- Fix styling of index page so that it doesn't affect /spotify route
- Adding song to playlist removes from current search list
- Fix 'Clear Playlist' button. Currently is not working. Check reducers.
- Refactor forEach loop in addTracks/addUris in search
- Overall application styling
- Create mock API using json data
- Add autocomplete in searchbar
- Add link to github repo on application
- Deploy application on Heroku/S3

## Feature
- ES6+ support via [babel](https://babeljs.io)
- Redux and its best practice (debug, style, routing)

## Setup

- learn [Redux](http://redux.js.org)
- clone this project
- install dependencies via `npm install`
- run a test server by `npm run server`

## Scripts

- `npm start` run a test server
- `npm run build` build production app

## Guide

### Path Alias (resolve)
Anything in `src/components` can be required by only `components/xx/xx.js`

see `webpack.config.js` `resolve` for more.

### Style Guide
Use [css-modules](https://github.com/css-modules/css-modules) to style react component.

Also, I use postcss to enhance css functions. You can write scss-like css, and use some future feature via cssnext.

### Server Mocks

Write your server mocks at `src/mocks`.

### Devtools

 To change the Devtool position press `ctrl + q` . To hide the dev tool press `ctrl + h`
