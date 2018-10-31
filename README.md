# Quiz game (Angular 7 + Node.js + Cordova)

## Required

* installed npm and nodejs
* npm install -g cordova
* npm install -g sequelize-cli
* npm install -g @angular/cli
* change apiUrl in `src/enviroments/enviroments.ts`
* install mysql
* [configure](http://docs.sequelizejs.com/manual/tutorial/migrations.html#configuration) db connection at `server/config/config.json`
* npm update in [`root`, `root/cordova`, `root/server`]

## Run

* `cd ./server`
* `sequelize db:create`
* `sequelize db:migrate`
* `sequelize db:seed:all`
* `npm start`
* `cd ../`
* `npm run cordova-run`