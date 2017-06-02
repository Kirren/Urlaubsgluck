# Urlaubsgluck
**Single page responsive site template.**

Features used:
 _ Node
  Gulp
  Bower
  Pug
  SCSS
  Bootstrap
  JavaScript_
  
## Dependencies and requirements/ Зависимости:
```
node >= 4.4.7
gulp == 4.0
bower
```

## Installation / Установка:
*For development you need to install a specific gulp version (gulp#4.0) in order to make it run*
```
npm i gulp -g
npm i gulpjs/gulp#4.0
```
Required package installation / Установка необходимых пакетов:
```
npm install
bower install
```

## Setting / Настройка:
Create a file "env/prod.env" and set it up according to existing "env/dev.env". Main settings are stored in "env/dev.env".
Создать файл "env/prod.env" и настроить его по подобию файла "env/dev.env". Основные настройки хранятся в файле "env/dev.env".

## Launch / Запуск:
Development-mode:
В режиме development:
```
npm start
```
or / или:
```
gulp default
```
The app will be available at: http://localhost:PORT. Port – usually 8081
Приложение будет доступно по адресу: http://localhost:PORT

Production-mode / В режиме production:
```
npm run build
```
or / или:
```
gulp build
```

## Available Gulp tasks / Доступные задачи среды Gulp:
"gulp lint"   – start debugging to see what's wrong.
"gulp clean"  – clean production ("public") folder.
"gulp serve"  – create server for better development.
"gulp default"  – open development environment.


