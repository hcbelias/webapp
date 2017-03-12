import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './search.routes';

export class SearchController {


  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('websiteApp.search', [uiRouter])
  .config(routing)
  .component('search', {
    template: require('./search.pug'),
    controller: SearchController
  })
  .name;
