'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

//Importing othermodules
import _Auth from '../components/auth/auth.module';
import constants from './app.constants';
import util from '../components/util/util.module';
//Importing components
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
//importing pages
import about from './about/about.component';
import links from './links/links.component';
import contact from './contact/contact.component';
import search from './search/search.component';
import main from './main/main.component';
//Importing css
import './app.scss';

angular.module('websiteApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap,
  _Auth, navbar, footer, main, constants, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['websiteApp'], {
      strictDi: true
    });
  });
