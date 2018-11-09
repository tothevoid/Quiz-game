# Quiz game (Angular 7 + Node.js + Cordova)

## Required

* installed npm and nodejs
* installed mysql
* installed python 3.7 (generate questions by fiiled csv)
* npm install -g cordova
* npm install -g sequelize-cli
* npm install -g @angular/cli
* change apiUrl in `src/enviroments/enviroments.ts`
* [configure](http://docs.sequelizejs.com/manual/tutorial/migrations.html#configuration) db connection at `server/config/config.json`
* npm update in [`root`, `root/cordova`, `root/server`]

## Run

### Generate questions from csv (optional)

* `current folder is a project root`
* `npm run q-gen`

### Front-end

* `current folder is a project root`
* `npm run cordova-run`

### Back-end

* `current folder is a project root`
* `cd ./server`
* `npm run deploy`
* `npm start`
