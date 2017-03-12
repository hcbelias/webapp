import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './contact.routes';

export class ContactController {

  /*@ngInject*/
  constructor() {

  }

}

export default angular.module('contact', [uiRouter])
  .config(routing)
  .component('contact', {
    template: require('./contact.pug'),
    controller: ContactController
  })
  .name;
