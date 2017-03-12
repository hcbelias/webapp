'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('links', {
    url: '/links',
    template: '<links></links>'
  });
}
