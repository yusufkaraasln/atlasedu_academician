# Atlas Edu Academics

### Description
A web application where you can get information about Atlas academics

### Details
You can sort the academics, you can filter, you can like anonymously, 
you can comment anonymously, you can see the 10 most liked and commented academics.
This application provides you with multi-language support and dark and light mode support.


## Live on Heroku

  https://atlasedu.herokuapp.com/

## Installation
First, download this source code. Then run the following commands from the terminal.

##### for client
``` sh
 npm install
```
```sh
 npm start
```
##### for server
```sh
 npm install
```
```sh
 npm start
```

## Directory Structure
```
server/
┣ client/
┃ ┣ public/
┃ ┃ ┣ apple-icon.png
┃ ┃ ┣ favicon.ico
┃ ┃ ┣ index.html
┃ ┃ ┣ logo192.png
┃ ┃ ┣ logo512.png
┃ ┃ ┣ manifest.json
┃ ┃ ┗ robots.txt
┃ ┣ src/
┃ ┃ ┣ assets/
┃ ┃ ┃ ┗ atlas_universitesi_logo.webp
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ BottomBar.jsx
┃ ┃ ┃ ┣ CommentItem.jsx
┃ ┃ ┃ ┣ CSkeletonItem.jsx
┃ ┃ ┃ ┣ LikedItem.jsx
┃ ┃ ┃ ┣ LSkeletonItem.jsx
┃ ┃ ┃ ┗ Message.jsx
┃ ┃ ┣ pages/
┃ ┃ ┃ ┣ ErrorPage.jsx
┃ ┃ ┃ ┣ Home.jsx
┃ ┃ ┃ ┣ Search.jsx
┃ ┃ ┃ ┣ Search.module.css
┃ ┃ ┃ ┣ Settings.jsx
┃ ┃ ┃ ┣ Settings.module.css
┃ ┃ ┃ ┣ Single.jsx
┃ ┃ ┃ ┗ TopTen.jsx
┃ ┃ ┣ redux/
┃ ┃ ┃ ┣ settingsReducer.js
┃ ┃ ┃ ┗ store.js
┃ ┃ ┣ styles/
┃ ┃ ┃ ┣ Message.module.css
┃ ┃ ┃ ┣ ScreenError.css
┃ ┃ ┃ ┗ Single.module.css
┃ ┃ ┣ utils/
┃ ┃ ┃ ┣ ajaxLoop.js
┃ ┃ ┃ ┗ language.json
┃ ┃ ┣ App.js
┃ ┃ ┣ config.js
┃ ┃ ┣ dummyData.js
┃ ┃ ┗ index.js
┃ ┣ .gitignore
┃ ┣ package-lock.json
┃ ┗ package.json
┣ controllers/
┃ ┣ academician.js
┃ ┣ comment.js
┃ ┣ like.js
┃ ┣ record.js
┃ ┗ search.js
┣ models/
┃ ┗ Academician.js
┣ routers/
┃ ┣ academicians.js
┃ ┗ search.js
┣ utils/
┃ ┗ db.js
┣ .env
┣ index.js
┣ package-lock.json
┗ package.json
```

#### Images
