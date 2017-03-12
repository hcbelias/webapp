import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './links.routes';

export class LinksController {

  /*@ngInject*/
  constructor() {
  }

}

export default angular.module('websiteApp.links', [uiRouter])
  .config(routing)
  .component('links', {
    template: require('./links.pug'),
    controller: LinksController
  })
  .name;
