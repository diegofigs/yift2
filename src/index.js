import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/js/bootstrap';
import uiBootstrap from 'angular-ui-bootstrap';

import AppComponent from './app/app.component';
import Components from './app/components/components';
import Services from './app/services/services';

import './index.scss';

export const app = 'app';

angular
  .module(app, [
    ngAnimate,
    ngTouch,
    ngMessages,
    uiRouter,
    uiBootstrap,
    Components,
    Services
  ])
  .config(($urlRouterProvider, $locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
  })
  .component('app', AppComponent);
