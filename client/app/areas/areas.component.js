import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './areas.routes';

export class AreasController {

  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('websiteApp.areas', [uiRouter])
  .config(routing)
  .component('areas', {
    template: require('./areas.pug'),
    controller: AreasController
  })
  .name;
