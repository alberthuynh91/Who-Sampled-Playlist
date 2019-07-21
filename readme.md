# Who Sampled Playlist (Application using Spotify API)

Have you ever wondered where your favorite artist sampled their music from? Would you like to create an entire playlist of songs sampled by your favorite artists? The Who Sampled Playlist application allows you to do discover awesome oldies and create new playlists of music sampled from your favorite artists.

[DEMO](https://who-sampled-playlist.herokuapp.com/)

## Setup

- Clone this project: `git clone https://github.com/alberthuynh91/Who-Sampled-Playlist.git`
- Make sure you are running node version `8.9.3`. You can check your node version by running `node -v`. You can switch versions using [nvm](https://github.com/creationix/nvm).  
- Install dependencies: `npm install`
- Build production app: `npm run build`
- Run test server: `npm start`
- Navigate to `localhost:5000` in your browser

## Backlog
- Show user feedback when no results found for an artist
- When scraping whosampled, only select `sampled` results and ignore `was sampled in` results
- Fix styling of index page so that it doesn't affect /spotify route
- Adding song to playlist should remove from current search list
- Fix 'Clear Playlist' button. Currently is not working. Check reducers.
- Refactor forEach loop in addTracks/addUris in search
- Desktop styling
- Create mock API using json data
- Add autocomplete in searchbar
- Add link to github repo on application
- Show logged in user

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
