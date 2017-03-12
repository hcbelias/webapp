import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './about.routes';

export class AboutController {

  /*@ngInject*/
  constructor() {

  }
}

export default angular.module('websiteApp.about', [uiRouter])
  .config(routing)
  .component('about', {
    template: require('./about.pug'),
    controller: AboutController
  })
  .name;
