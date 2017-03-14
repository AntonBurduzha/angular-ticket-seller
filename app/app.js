import angular from 'angular'
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap'

import '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
import '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
import '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
import '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot'
import '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/style.scss'

import './components/home/home.module'
import './components/film/film.module'

import { routerConfig } from './app.router'

angular.module('AngularTestApp', [
    uiBootstrap,
    uiRouter,
    'app.home',
    'app.film'
  ])
  .config(routerConfig);